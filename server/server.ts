// Dependencies
import express, { Request, Response, NextFunction } from 'express'
import { sendMessage } from './rabbitmq/producer'
import Database from 'better-sqlite3'
import * as jwt from 'jsonwebtoken'
import passport from 'passport'
require('svelte/register')
import fs from 'fs'             // There's no order here
import './auth.ts'              // It just looks cool
import path from 'path'
import cron from 'node-cron'
import { sendMail } from './email'
import { createClient } from 'redis'
import cookieParser from 'cookie-parser'
import type { UserType, Book, CheckoutBook } from './types'

// Initializing redis client
export const redisClient = createClient({url:'redis://localhost:6379'});

(async () => {
    redisClient.on("error", (error) => console.error(`❌[Redis]: Client Error: ${error}`));
    await redisClient.connect().then(() => console.log('✅[Redis]: Client connected!'))
    await redisClient.configSet('maxmemory', '500mb').then(() => console.log('✅[Redis]: maxmemory set to 500mb!'))
    await redisClient.configSet('maxmemory-policy', 'allkeys-lru').then(() => console.log('✅[Redis]: maxmemory-policy set to allkeys-lru!'))
})();

// Create Express app
const app:express.Application = express()
const port:number = 3000

app.use(cookieParser())
app.use(express.json())

// Database initialization
export const db = new Database('./server/data.db', {verbose: console.log})
db.pragma('journal_mode = WAL')

// Function to check if any user with borrowed books
// Has some book for which the issued time has been surpassed

async function checkOverdueBooks() {
    console.log('Checking for overdue books')
    const users:UserType[] = db.prepare(`select * from users where booksBorrowed not like '[]';`).all()
    users.forEach(user => {
        JSON.parse(user.booksBorrowed).forEach(async (book: CheckoutBook) => {
            const timeElapsed = Date.now() - book.timeWhenCheckedOut
            const oneWeek  =  7*24*60*60*1000 // 1 week  in MS
            const twoWeeks = 14*24*60*60*1000 // 2 weeks in MS
            
            //values for testing
            const oneMin = 60 * 1000
            const _30sec = 30 * 1000

            if (timeElapsed >= twoWeeks) {
                // Change flag isPenalized to 1 if not already
                if (!user.isPenalized) db.prepare(`update users set isPenalized = 1 where uID = ?;`).run(user.uID)
                console.log(`Changed flag isPenalized to 1 for ${user.uName}`)

                // This could be integrated with some penalty system that
                // for example, deducts money or points from the user with each passing day
                // or doesn't allow them to issue more books for a while

            } else if (timeElapsed >= oneWeek) {
                // Send an email reminder to the user
                await sendMail({
                    from: process.env.PROJECT_EMAIL!,
                    to: user.email,
                    subject: `Alert`,
                    text: `Hi ${user.fName}, this is a reminder that a week has passed since you issued the book ${book.bID}`
                })
                console.log(`Sent an email reminder to ${user.uName}`)
            }
        });
    });
}

// Schedule (node-)cron jobs
cron.schedule('*/30 * * * *', checkOverdueBooks) // runs every 30 minutes, only for testing
cron.schedule('*/30 * * * * *', ()=>{console.log('⚡[server]: still alive')}) // runs every 30 seconds

// Initialize `users` table
// with columns for storing user ID, email, full name, username
// a stringified array of objects denoting borrowed books
// and flags for if it is an admin account
// and if the user has some book for more than the alotted time
db.exec(`create table if not exists users (
    uID text primary key unique,
    email text unique,
    fName text default null,
    uName text unique,
    booksBorrowed text default '[]',
    isAdmin integer default 0,
    isPenalized integer default 0
);`)

// Initialize `books` table
// with columns to store book ID, book name, genre, author
// number of copies available
// and number of copies borrowed by people
db.exec(`create table if not exists books (
    bID text primary key unique,
    bName text default null,
    genre text default null,
    author text default null,
    copyCount integer default 0,
    borrowCount integer default 0
);`)

// Initialize `subscribe` table
// to store emails of users who have subsribed to receive an alert
// when a fully checked-out book becomes available
// (brownie point)
db.exec(`create table if not exists subscribe (
    bID text primary key unique,
    emails text
);`)

export async function createUser(gID:string, email:string, fName:string, uName:string, isAdmin=0) {
    db.prepare(`insert into users values(?, ?, ?, ?, '[]', ?, 0);`).run(gID, email, fName, uName, isAdmin)
}

async function createBook(bID:string, bName:string, genre:string, author:string, copyCount=0) {
    db.prepare(`insert into books values(?, ?, ?, ?, ?, 0);`).run(bID, bName, genre, author, copyCount)
}

export async function getUser(by:string, val:string):Promise<UserType[]> {
    return db.prepare(`select * from users where ${by} = ?;`).get(val)
}

// Define a middleware function to log requests
const logRequests = (req:Request, res:Response, next:NextFunction) => {
    console.log(`⏳[server]: [${new Date().toISOString()}] ${req.method} ${req.url}`)
    next()
}
app.use(logRequests)


// Extend req interface
declare global {
    namespace Express {
        interface Request {
            data: UserType,
            isLoggedIn: boolean,
            isAdmin: boolean
        }
    }
}

// Define middleware to verify JWT token
const verifyJWTi = (req:Request, res:Response, next:NextFunction) => {
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET!, (err:any, user:any)=>{
            // if (err) return res.sendStatus(403)
            if (!err) {
                req.data = user.user
                req.isLoggedIn = true
            } else req.isLoggedIn = false
        })
    } else {
        // res.sendStatus(401)
        req.isLoggedIn = false
    }
    next()
}
app.use(verifyJWTi)

// Routes

// Index route

app.get('/', (req, res) => {
    const indexFile = fs.readFileSync(path.resolve(__dirname, '..', 'svelte', 'public', 'index.html'))
    const data = require('../svelte/src/pages/Home.svelte').default.render()
    res.send(indexFile.toString().replace('<div id="app"></div>', `<div id="app">
    ${data.html} 
    <script>
        window.__COMP__ = "Home";
        window.__ISLOGGEDIN__ = ${req.isLoggedIn};
    </script>
    </div>`))
})

// Book search route

app.get('/search', async (req, res) => {
    let searchedBook = req.query.book || ''
    let limit = req.query.limit || -1

    let genre = req.query.genre || ''
    let author = req.query.author || ''

    const indexFile = fs.readFileSync(path.resolve(__dirname, '..', 'svelte', 'public', 'index.html'))

    let books:Book[]

    let cachedBookResult

    // Checking if client is connected or not

    if (redisClient.isReady) {
        cachedBookResult = await redisClient.get(
            `search:${searchedBook}&genre:${genre}&author:${author}`
        );
    }
    
    if (cachedBookResult) {
        console.log('⚡[server]: Using cached results')
        books = JSON.parse(cachedBookResult)
    } else {
        console.log('⚡[server]: Cached results not found, querying database')
        const stmt = db.prepare(
            `select * from books
            where lower(books.bName ) like lower('%'|| ? ||'%')
              and lower(books.genre ) like lower('%'|| ? ||'%')
              and lower(books.author) like lower('%'|| ? ||'%')
            limit ?`
        )
        books = stmt.all(searchedBook, genre, author, limit)
        
        redisClient.set(
            `search:${searchedBook}&genre:${genre}&author:${author}`,
            JSON.stringify(books), {'EX':3600}
        )
    }
    
    // Rendering the component with the given props here doesn't work, data shows up as null

    const data = require('../svelte/src/pages/Search.svelte').default.render({
        data: books
    })

    // So I'm sending it as window.__COMP__ for which component to render according to the route
    // and window.__DATA__ for the props
    // which will then be read client-side to "hydrate" the svelte component
    
    // Edit: also sending window.__ISLOGGEDIN__ to let the navbar know
    // which button to render conditionally, login or user profile

    res.send(indexFile.toString().replace('<div id="app"></div>', `<div id="app">
    ${data.html} 
    <script>
        window.__COMP__ = "Search";
        window.__ISLOGGEDIN__ = ${req.isLoggedIn};
        window.__DATA__ = ${JSON.stringify(books)};
    </script>
    </div>`))

})

// About route

app.get('/about', (req, res) => {
    const indexFile = fs.readFileSync(path.resolve(__dirname, '..', 'svelte', 'public', 'index.html'))
    const data = require('../svelte/src/pages/About.svelte').default.render()
    res.send(indexFile.toString().replace('<div id="app"></div>', `<div id="app">
    ${data.html} 
    <script>
        window.__COMP__ = "About";
        window.__ISLOGGEDIN__ = ${req.isLoggedIn};
    </script>
    </div>`))
})

// Authentication routes

app.get('/login', 
    passport.authenticate('google', {scope: ['email', 'profile'], session:false})
)

app.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/auth/failure', session:false}),
    (req, res) => {
        const token = req.user
        res.cookie('jwt', token, {httpOnly: true, maxAge: parseInt(process.env.EXPIRYMS!)})
        res.redirect(`/profile`)
    }
)

app.get('/auth/failure', (req, res)=>{
    res.send('Something went wrong!')
})

app.get('/logout', (req, res)=>{
    res.clearCookie('jwt')
    res.redirect('/')
})

// Profile page route

app.get('/profile', (req, res) => {
    
    if (!req.isLoggedIn) res.sendStatus(401)

    const indexFile = fs.readFileSync(path.resolve(__dirname, '..', 'svelte', 'public', 'index.html'))
    
    const data = require('../svelte/src/pages/Profile.svelte').default.render({
        data: req.data
    })

    res.send(indexFile.toString().replace('<div id="app"></div>', `<div id="app">
    ${data.html} 
    <script>
        window.__COMP__ = "Profile";
        window.__ISLOGGEDIN__ = ${req.isLoggedIn};
        window.__DATA__ = ${JSON.stringify(req.data)};
    </script>
    </div>`))
})

// User schedule book

app.get('/schedule', (req, res) => {

    if (!req.isLoggedIn) res.sendStatus(401)

    const indexFile = fs.readFileSync(path.resolve(__dirname, '..', 'svelte', 'public', 'index.html'))
    const data = require('../svelte/src/pages/Schedule.svelte').default.render({
        data: req.data.booksBorrowed
    })
    res.send(indexFile.toString().replace('<div id="app"></div>', `<div id="app">
    ${data.html} 
    <script>
        window.__COMP__ = "Schedule";
        window.__ISLOGGEDIN__ = ${req.isLoggedIn};
        window.__DATA__ = ${req.data.booksBorrowed};
    </script>
    </div>`))
})

// Admin routes

// Admin panel to (C)RUD users

app.get('/admin/users', (req, res) => {
    
    if (!req.isLoggedIn) res.sendStatus(401)
    if (!req.data.isAdmin) res.sendStatus(403)

    const stmt = db.prepare(`select * from users`)
    const users:UserType[] = stmt.all()
    
    const indexFile = fs.readFileSync(path.resolve(__dirname, '..', 'svelte', 'public', 'index.html'))
    
    const data = require('../svelte/src/pages/Admin.svelte').default.render({
        data: users
    })

    res.send(indexFile.toString().replace('<div id="app"></div>', `<div id="app">
    ${data.html} 
    <script>
        window.__COMP__ = "Admin";
        window.__ISLOGGEDIN__ = ${req.isLoggedIn};
        window.__DATA__ = ${JSON.stringify(users)};
    </script>
    </div>`))
})

// Admin panel to CRUD books

app.get('/admin/books', (req, res) => {

    if (!req.isLoggedIn) res.sendStatus(401)
    if (!req.data.isAdmin) res.sendStatus(403)

    const stmt = db.prepare(`select * from books`)
    const books:Book[] = stmt.all()
    
    const indexFile = fs.readFileSync(path.resolve(__dirname, '..', 'svelte', 'public', 'index.html'))
    
    const data = require('../svelte/src/pages/Admin.svelte').default.render({
        data: books
    })

    res.send(indexFile.toString().replace('<div id="app"></div>', `<div id="app">
    ${data.html}
    <script>
        window.__COMP__ = "Admin";
        window.__ISLOGGEDIN__ = ${req.isLoggedIn};
        window.__DATA__ = ${JSON.stringify(books)};
    </script>
    </div>`))
})

// API routes

// User subscribes to unavailable book

app.post('/api/subscribe', async (req, res)=>{
    
    if (!req.isLoggedIn) {
        res.status(401).json({message: 'Need to login first'})
    } else {
        let book:Book = req.body.book
        let user:UserType = req.data

        let emails = db.prepare('select emails from subscribe where bID = ?').get(book.bID)
        if (!emails) {
            db.prepare(`insert into subscribe values(?, ?);`).run(book.bID, JSON.stringify([user.email]))
            res.json({message: 'Created subscription'})
        } else {
            emails = JSON.parse(emails.emails)
            if (emails.includes(user.email)) {
                res.json({message: 'User already subsribed to this book'})
            } else {
                emails.push(user.email)
                db.prepare(`update subscribe set emails = ? where bID = ?;`).run(JSON.stringify(emails), book.bID)
                res.json({message: 'Subscribed successfully'})
            }
        }
    }

})

// User schedules custom notifications for a book

app.post('/api/scheduleBook', async (req, res)=>{

    if (!req.isLoggedIn) res.sendStatus(401)

    let message:string = req.body.message
    let delay:number = req.body.delay
    let bID:number = req.body.bID
    let timeWhenCheckedOut:number = req.body.timeWhenCheckedOut

    await sendMessage(
        `Your need to return book ${bID} checked out on ${timeWhenCheckedOut}.\nCustom message: ${message}`,
        // delay*1000, // seconds, change to days later
        delay*24*60*60*1000, // days in ms
        req.data.email,
    )

    res.json({message: `Scheduled ${bID} with a delay of ${delay} days`})
})

// User checks out book

app.post('/api/checkoutBook', async (req, res)=>{

    if (!req.isLoggedIn) {
        res.status(401).json({message: 'Need to login first'})
    } else {
        let book:Book = req.body.book
        let user:UserType = req.data

        // Check if copies are available
        if (book.borrowCount < book.copyCount) {

            let booksBorrowed:CheckoutBook[] = JSON.parse(user.booksBorrowed)
            if (booksBorrowed.length < 3) {

                // Check if user has already checked out the book
                if (booksBorrowed.some(checkoutBook => checkoutBook.bID === book.bID)) {
                    res.json({message: 'This book has already been checked out by this user'})
                } else {

                    booksBorrowed.push({
                        timeWhenCheckedOut: req.body.time,
                        bID: book.bID,
                        // bName: book.bName,
                        // author: book.author,
                        // genre: book.genre
                    })

                    let userHavingBorrowedBooks = user
                    userHavingBorrowedBooks.booksBorrowed = JSON.stringify(booksBorrowed)

                    // Set new cookie so that the added book
                    // gets reflected in the user profile
                    res.cookie('jwt', jwt.sign(
                        {user: userHavingBorrowedBooks},
                        process.env.JWT_SECRET!,
                        {expiresIn: process.env.EXPIRYMS!}
                    ), {httpOnly: true, maxAge: parseInt(process.env.EXPIRYMS!)})

                    let stmt = db.prepare(`update users set booksBorrowed = ? where uID = ?;`)
                    stmt.run(JSON.stringify(booksBorrowed), user.uID)

                    book['borrowCount'] += 1
                    stmt = db.prepare(`update books set borrowCount = borrowCount + 1 where bID = ?;`)
                    stmt.run(book.bID)

                    res.json({message: 'Book checked out'})

                }

            } else res.json({message: 'Cannot checkout more than 3 books'})

        } else res.json({message: 'No copies available'})
    }

})

// Delete redis cache when required

app.post('/api/rebuildCache', async (req, res)=>{
    
    if (!req.isLoggedIn) res.sendStatus(401)
    // if (!req.data.isAdmin) res.sendStatus(403)
    
    let searchedBook:Book = req.body.searchTerm

    try {
        await redisClient.keys('search:*')
            .then(res => {
                res.forEach(async e => {
                    await redisClient.del(e)
                    console.log(`Deleted ${e}\n`)
                });
            })
        res.json({message: `Delete cache for ${searchedBook}`})
    } catch (e) {
        res.json({message: `Could not rebuild cache for ${searchedBook}: ${e}`})
    }
})

// Get users with a particular book

app.post('/api/getUsersWithBook', (req, res)=>{

    if (!req.isLoggedIn) res.sendStatus(401)
    if (!req.data.isAdmin) res.sendStatus(403)

    const stmt = db.prepare(`select * from users where booksBorrowed like '%"bID":"'|| ? ||'"%';`)
    const users:UserType[] = stmt.all(req.body.bID)
    res.json({users:users})
})

// Update user after returning book

app.post('/api/updateUserAfterBookReturn', (req, res)=>{

    if (!req.isLoggedIn) res.sendStatus(401)
    if (!req.data.isAdmin) res.sendStatus(403)

    const uID = req.body.uID
    const bID = req.body.bID

    const booksBorrowed:string = db.prepare(`select booksBorrowed from users where uID = ?;`)
        .get(uID)
        .booksBorrowed
    
    let modifiedBooksBorrowed = JSON.parse(booksBorrowed).filter((obj: {
        timeWhenCheckedOut: number,
        bID: string
    }) => obj.bID !== bID)

    db.prepare(`
        update users
        set booksBorrowed = ?
        where uID = ?
    ;`).run(JSON.stringify(modifiedBooksBorrowed), uID)

    res.json({message: `User ${uID} updated after returning ${bID}`})
})

// Decrement borrow count after returning book

app.post('/api/returnBook', (req, res)=>{

    if (!req.isLoggedIn) res.sendStatus(401)
    if (!req.data.isAdmin) res.sendStatus(403)

    const bID = req.body.bID

    try {
        db.prepare(`update books set borrowCount = borrowCount - 1 where bID = ?;`).run(bID)

        let emails = db.prepare('select emails from subscribe where bID = ?').get(bID)
        if (emails) {
            JSON.parse(emails.emails).forEach(async (email:string) => {
                    await sendMail({
                        from: process.env.PROJECT_EMAIL!,
                        to: email,
                        subject: `Book ${bID} is available for issuing`,
                        text: `Hi ${email.split('@')[0]}, book ${bID} is now available for issuing.`
                    })  .then(res => {
                            console.log(res)
                            console.log(`sent mail to ${email}`)
                        })
                        .catch((e) => {
                            console.log(`Couldn't send mail to ${email}: ${e}`)
                        })
            });
        }
        db.prepare('delete from subscribe where bID = ?').run(bID)
        console.log(`Removed subscriptions for ${bID}`)

        res.json({message: `Returned ${bID}`})
    } catch (e) {
        res.json({message: `Could not return ${e}`})
    }
})

// Create new book entry

app.post('/api/createBook', (req, res)=>{

    if (!req.isLoggedIn) res.sendStatus(401)
    if (!req.data.isAdmin) res.sendStatus(403)

    else {
        try {
            let book:Book = req.body.book
            createBook(book.bID, book.bName, book.genre, book.author, book.copyCount)
            res.json({message: `Book created with code ${book.bID}`})
        } catch (e) {
            res.json({message: `Book couldn't be created: ${e}`})
        }
    }
})

// Update existing book entry
// and the users having that book

app.post('/api/updateBook', (req, res)=>{
    
    if (!req.isLoggedIn) res.sendStatus(401)
    if (!req.data.isAdmin) res.sendStatus(403)

    else {
        try {
            let book:Book = req.body.updatedBook
            let originalBookID:string = req.body.originalBookID
            let stmt = db.prepare(`
                update books set
                    bID = ?,
                    bName = ?,
                    genre = ?,
                    author = ?,
                    copyCount = ?
                where bID = ?
            ;`)
            stmt.run(
                book.bID, book.bName, book.genre, book.author, book.copyCount,
                originalBookID
            )

            stmt = db.prepare(`select * from users where booksBorrowed like '%"bID":"'|| ? ||'"%';`)
            const users:UserType[] = stmt.all(originalBookID)

            users.forEach(user => {
                let booksBorrowed:CheckoutBook[] = JSON.parse(user.booksBorrowed)
                booksBorrowed.forEach(bookBorrowed => {
                    if (bookBorrowed.bID === originalBookID) {
                        bookBorrowed.bID = book.bID
                    }
                });
                if (user.booksBorrowed != JSON.stringify(booksBorrowed)) {
                    console.log(`Updating user ${user.uName}`)
                    db.prepare(`
                        update users
                        set booksBorrowed = ?
                        where uID = ?
                    ;`).run(JSON.stringify(booksBorrowed), user.uID)
                }
            });

            res.json({message: `Book ${originalBookID} updated to: ${JSON.stringify(book)}`})
        } catch (e) {
            res.json({message: `Book couldn't be updated: ${e}`})
        }
    }
})

// Update user

app.post('/api/updateUser', (req, res)=>{
    
    if (!req.isLoggedIn) res.sendStatus(401)
    if (!req.data.isAdmin) res.sendStatus(403)

    else {
        try {
            let user:UserType = req.body.updatedUser
            let originalUserID:string = req.body.originalUserID
            let stmt = db.prepare(`
                update users set
                    uID = ?,
                    email = ?,
                    fName = ?,
                    uName = ?,
                    booksBorrowed = ?,
                    isAdmin = ?,
                    isPenalized = ?
                where uID = ?
            ;`)
            stmt.run(
                user.uID, user.email, user.fName, user.uName, user.booksBorrowed, user.isAdmin, user.isPenalized,
                originalUserID
            )

            res.json({message: `User ${originalUserID} updated to: ${JSON.stringify(user)}`})
        } catch (e) {
            res.json({message: `User couldn't be updated: ${e}`})
        }
    }
})

// Delete book entry

app.post('/api/deleteBook', (req, res)=>{
    
    if (!req.isLoggedIn) res.sendStatus(401)
    if (!req.data.isAdmin) res.sendStatus(403)

    else {
        try {
            let bID:string = req.body.bID
            db.prepare(`delete from books where bID = ?;`).run(bID)
            res.json({message: `Book ${bID} deleted succesfully`})
        } catch (e) {
            res.json({message: `Book couldn't be deleted: ${e}`})
        }
    }
})

// Delete user entry

app.post('/api/deleteUser', (req, res)=>{
    
    if (!req.isLoggedIn) res.sendStatus(401)
    if (!req.data.isAdmin) res.sendStatus(403)

    else {
        try {
            let uID:string = req.body.uID
            db.prepare(`delete from users where uID = ?;`).run(uID)
            res.json({message: `User ${uID} deleted succesfully`})
        } catch (e) {
            res.json({message: `User couldn't be deleted: ${e}`})
        }
    }
})

// Initialize some dummy books from a json file

app.get('/api/initBooks', (req, res) => {
    var bookCount = db.prepare('select count(*) from books').get()['count(*)']
    if (!bookCount) {
        const books:Book[] = require('./dummyBooks.json')
        const stmt = db.prepare(`insert into books values(?,?,?,?,?,?)`)
        for (let i = 0; i < books.length; i++) {
            stmt.run(books[i])
        }
    }
    res.send(`Initialized books: ${JSON.stringify(bookCount)}`)
})

app.use(express.static(path.join(__dirname, '..', 'svelte', 'public')))
app.use('/static', express.static(path.join(__dirname, '..', 'svelte', 'static')))

// app.use((req:Request, res:Response, next:NextFunction) => {
//     res.status(404).send("That page doesn't exist.")
// })

app.listen(port, () => {
    console.log(`⚡[server]: running on http://localhost:${port}/`)
})