// Dependencies
import express, { Request, Response, NextFunction } from 'express'
import type { UserType, Book } from './types'
import cookieParser from 'cookie-parser'
import Database from 'better-sqlite3'
import * as jwt from "jsonwebtoken"
import passport from 'passport'
import path from 'path'
import './auth'

const app:express.Application = express()
const port:number = 3000

app.use(cookieParser())
// app.use(express.static(path.join(__dirname, '..', 'svelte', 'public')))

// Db initialization
const db = new Database('./server/data.db', {verbose: console.log})
db.pragma('journal_mode = WAL')

db.exec(`create table if not exists users (
    uID text primary key unique,
    email text unique,
    fName text default null,
    uName text unique,
    booksBorrowed text default null,
    isAdmin integer default 0
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
    db.prepare(`insert into users values(?, ?, ?, ?, 0, ?);`).run(gID, email, fName, uName, isAdmin)
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

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '..', 'svelte', 'public', 'index.html'))
    res.send('test')
})

app.get('/auth/google', 
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

app.get('/auth/failure', (req, res)=>{
    res.send('Something went wrong!')
})

// Define middleware to verify JWT token
const verifyJWTi = (req:Request, res:Response, next:NextFunction) => {
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET!, (err:any, user:any)=>{
            if (err) return res.sendStatus(403)
            req.data = user.user
            next()
        })
    } else res.sendStatus(401)
}

app.get('/profile', verifyJWTi, (req, res) => {
    res.send(`Hello, ${JSON.stringify(req.data)}!`)
})

app.get('/admin', verifyJWTi, (req, res)=>{
    const profile:UserType = req.data
    if (!profile.isAdmin) res.sendStatus(403)
    else res.send(`Welcome, admin ${JSON.stringify(profile)}!`)
    // res.send(profile)
})

app.get('/admin/users', verifyJWTi, (req, res) => {
    const stmt = db.prepare(`select * from users`)
    const users:UserType[] = stmt.all()
    res.json(users)
})

app.get('/api/initBooks', (req, res) => {
    var bookCount = db.prepare('select count(*) from books').get()['count(*)']
    if (!bookCount) {
        const books = [
            ['001-BLA.J', 'Lorem Ipsum', 'Math', 'H. Wells', 7, 7],
            ['002-ZZZ.J', 'Dolor Sit Amet', 'History', 'J. Smith', 3, 1],
            ['003-ABC.J', 'Consectetur Adipiscing Elit', 'Science', 'E. Brown', 5, 2],
            ['004-DEF.J', 'Sed Do Eiusmod Tempor Incididunt', 'Fiction', 'S. Johnson', 10, 0],
            ['005-GHI.J', 'Ut Labore Et Dolore Magna', 'Biography', 'M. Garcia', 2, 2],
            ['006-JKL.J', 'Aliquam Consequat Ultricies Ligula', 'Philosophy', 'A. Lee', 8, 5],
            ['007-MNO.J', 'Nulla Facilisi. Aenean Nec Eros', 'Politics', 'R. Clark', 6, 3],
            ['008-PQR.J', 'Vestibulum Ante Ipsum Primis', 'Arts', 'G. Turner', 4, 2],
            ['009-STU.J', 'In Faucibus Orci Luctus Et', 'Poetry', 'T. Nguyen', 1, 0],
            ['010-VWX.J', 'Quisque Ut Ligula Velit', 'Education', 'K. Kim', 9, 8]
        ]
    
        const stmt = db.prepare(`insert into books values(?,?,?,?,?,?)`)
        for (let i = 0; i < books.length; i++) {
            stmt.run(books[i])
        }
    }
    res.send(`Initialized books: ${JSON.stringify(bookCount)}`)
})

app.get('/api/getBooks', (req, res) => {
    const stmt = db.prepare(`select * from books`)
    const books:Book[] = stmt.all()
    res.json(books)
})

app.get('/api/searchBooks', (req,res)=>{
    let searchedBook = req.query.book
    let limit = req.query.limit
    const stmt = db.prepare(`select * from books where lower(books.bName) like lower('%'|| $searchedBook ||'%') limit $limit`)
    const books:Book[] = stmt.all({searchedBook, limit})
    res.send(books)
})

app.listen(port, () => {
    console.log(`⚡[server]: running on http://localhost:${port}/`)
})