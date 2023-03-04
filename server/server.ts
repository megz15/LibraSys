// Dependencies
import express, { Request, Response, NextFunction } from 'express'
import type { UserType, Book } from './types'
import cookieParser from 'cookie-parser'
import Database from 'better-sqlite3'
import * as jwt from "jsonwebtoken"
import passport from 'passport'
require('svelte/register')
import path from 'path'
import fs from 'fs'
import './auth.ts'

const app:express.Application = express()
const port:number = 3000

app.use(cookieParser())
app.use(express.json())

// Db initialization
const db = new Database('./server/data.db', {verbose: console.log})
db.pragma('journal_mode = WAL')

db.exec(`create table if not exists users (
    uID text primary key unique,
    email text unique,
    fName text default null,
    uName text unique,
    booksBorrowed text default '[]',
    isAdmin integer default 0,
    isPenalized integer default 0
);`)

db.exec(`create table if not exists books (
    bID text primary key unique,
    bName text default null,
    genre text default null,
    author text default null,
    copyCount integer default 0,
    borrowCount integer default 0
);`)

export function createUser(gID:string, email:string, fName:string, uName:string, isAdmin=0) {
    db.prepare(`insert into users values(?, ?, ?, ?, '[]', ?, 0);`).run(gID, email, fName, uName, isAdmin)
}

export function getUser(by:string, val:string):UserType[] {
    return db.prepare(`select * from users where ${by} = ?;`).get(val)
}

// Define a middleware function to log requests
const logRequests = (req:Request, res:Response, next:NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    next()
}
app.use(logRequests)

// Routes

// app.get('/', (req, res) => {
//     res.send('Index page')
// })

app.get('/search', (req, res) => {
    let searchedBook = req.query.book || ''
    let limit = req.query.limit || 50

    const indexFile = fs.readFileSync(path.resolve(__dirname, '..', 'svelte', 'public', 'index.html'))
    
    const stmt = db.prepare(`select * from books where lower(books.bName) like lower('%'|| $searchedBook ||'%') limit $limit`)
    const books:Book[] = stmt.all({searchedBook, limit})
    
    // Rendering the component with the given props here doesn't work, data shows up as null

    const data = require('../svelte/src/pages/Search.svelte').default.render({
        data: books
    })

    // So I'm sending it as window.__COMP__ for which component to render according to the route
    // and window.__DATA__ for the props
    // which will then be read client-side to "hydrate" the svelte component

    res.send(indexFile.toString().replace('<div id="app"></div>', `<div id="app">
    ${data.html} 
    <script>
        window.__COMP__ = "Search";
        window.__DATA__ = ${JSON.stringify(books)};
    </script>
    </div>`))

})

app.get('/search/:bookID', (req, res)=>{
    const book:Book = db.prepare(`select * from books where bID like '%'|| ? ||'%';`).get(req.params.bookID)
    res.send(book)
})

app.get('/about', (req, res) => {
    const indexFile = fs.readFileSync(path.resolve(__dirname, '..', 'svelte', 'public', 'index.html'))
    const data = require('../svelte/src/pages/About.svelte').default.render()
    res.send(indexFile.toString().replace('<div id="app"></div>', `<div id="app">
    ${data.html} 
    <script>
        window.__COMP__ = "About";
    </script>
    </div>`))
})

app.get('/login', 
    passport.authenticate('google', {scope: ['email', 'profile'], session:false})
)

app.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/auth/failure', session:false}),
    (req, res) => {
        const token = req.user
        res.cookie('jwt', token)
        res.redirect(`/profile`)
    }
)

app.get('/logout', (req, res)=>{
    res.clearCookie('jwt')
    res.redirect('/')
})

app.get('/auth/failure', (req, res)=>{
    res.send('Something went wrong!')
})

declare global {
    namespace Express {
        interface Request {
            data: UserType
        }
    }
}

// Define middleware to verify JWT token
const verifyJWTi = (req:Request, res:Response, next:NextFunction) => {
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET!, (err:any, user:any)=>{
            if (err) return res.sendStatus(403)
            req.data = user.user
            // res.cookie('jwt',jwt.sign({
            //     user: req.data
            // }, process.env.JWT_SECRET!, {expiresIn: '1d'}))
            next()
        })
    } else res.sendStatus(401)
}

app.get('/profile', verifyJWTi, (req, res) => {
    const indexFile = fs.readFileSync(path.resolve(__dirname, '..', 'svelte', 'public', 'index.html'))
    
    const data = require('../svelte/src/pages/Profile.svelte').default.render({
        data: req.data
    })

    res.send(indexFile.toString().replace('<div id="app"></div>', `<div id="app">
    ${data.html} 
    <script>
        window.__COMP__ = "Profile";
        window.__DATA__ = ${JSON.stringify(req.data)};
    </script>
    </div>`))
})

app.post('/api/checkoutBook', verifyJWTi, (req, res)=>{
    let book:Book = req.body.book
    let user:UserType = req.data

    if (book.borrowCount < book.copyCount) {

        let booksBorrowed:Book[] = JSON.parse(user.booksBorrowed)
        if (booksBorrowed.length < 3) {
            booksBorrowed.push(book)

            let userHavingBorrowedBooks = user
            userHavingBorrowedBooks.booksBorrowed = JSON.stringify(booksBorrowed)

            res.cookie('jwt',jwt.sign({
                user: userHavingBorrowedBooks
            }, process.env.JWT_SECRET!, {expiresIn: '1d'}))

            let stmt = db.prepare(`update users set booksBorrowed = ? where uID = ?;`)
            stmt.run(JSON.stringify(booksBorrowed), user.uID)

            console.log(book.borrowCount)
            console.log(book.copyCount)
            book['borrowCount'] += 1
            stmt = db.prepare(`update books set borrowCount = borrowCount + 1 where bID = ?;`)
            stmt.run(book.bID)

            res.json({message: 'Book checked out'})
        } else res.json({message: 'Cannot checkout more than 3 books'})

    } else res.json({message: 'No copies available'})
})

// app.get('/admin', verifyJWTi, (req, res)=>{
//     const profile:UserType = req.data
//     if (!profile.isAdmin) res.sendStatus(403)
//     else res.send(`Welcome, admin ${JSON.stringify(profile)}!`)
//     // res.send(profile)
// })

app.get('/admin/users', verifyJWTi, (req, res) => {
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
        window.__DATA__ = ${JSON.stringify(users)};
    </script>
    </div>`))
})

app.get('/admin/books', verifyJWTi, (req, res) => {
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
        window.__DATA__ = ${JSON.stringify(books)};
    </script>
    </div>`))
})

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

// app.get('/api/getBooks', (req, res) => {
//     const stmt = db.prepare(`select * from books`)
//     const books:Book[] = stmt.all()
//     res.json(books)
// })

app.get('/api/searchBooks', (req,res)=>{
    let searchedBook = req.query.book
    let limit = req.query.limit || 50
    const stmt = db.prepare(`select * from books where lower(books.bName) like lower('%'|| $searchedBook ||'%') limit $limit`)
    const books:Book[] = stmt.all({searchedBook, limit})
    res.send(books)
})

// app.use(handler)
app.use(express.static(path.join(__dirname, '..', 'svelte', 'public')))

app.listen(port, () => {
    console.log(`⚡[server]: running on http://localhost:${port}/`)
})