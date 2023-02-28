import express, { Request, Response, NextFunction } from 'express';
// import session from 'express-session';
import Database from 'better-sqlite3'
import path from 'path'
import type { User, Book } from './types';
import passport from 'passport'
import './auth'
import cookieParser from 'cookie-parser';
import * as jwt from "jsonwebtoken";

const app: express.Application = express();
const port: number = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

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
    // Planning to use Mersenne Twister generator later for the UID instead of SQL autoincrement
    // to minimize the chances of malicious attacks based on sequential ID
    // Edit: Nevermind, using user's google ID
    db.prepare(`insert into users values(?, ?, ?, ?, 0, ?);`).run(gID, email, fName, uName, isAdmin)
    // db.exec(`insert into users values(${Date.now()}, '${email}', '${fName}', '${uName}', 0, 0);`)
}

export function getUser(by:string, val:string):User[] {
    return db.prepare(`select * from users where ${by} = ?;`).get(val)
}

app.use(express.static(path.join(__dirname, '../svelte/public')));

// Define a middleware function to log requests
const logRequests = (req:Request, res:Response, next:NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware function or route handler
};
app.use(logRequests);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../svelte/public', 'index.html'));
});

app.get('/auth/google', 
    passport.authenticate('google', {scope: ['email', 'profile'], session:false})
)

app.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/auth/failure', session:false}),
    (req, res) => {
        // const token = jwt.sign({user:req.user}, process.env.JWT_SECRET!);
        const token = req.user
        console.log(`\n\n${JSON.stringify(token)}\n\n`)
        res.cookie('jwt', token)
        // res.header('Authorization', `JWT ${token}`)
        res.redirect(`/profile`)
    }
)

app.get('/auth/failure', (req, res)=>{
    res.send('Something went wrong!')
})

// Define middleware to verify JWT token
const verifyJWTi = (req:Request, res:Response, next:NextFunction) => {
    // const token = req.query.token as string
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET!, (err:any, user:any)=>{
            if (err) {
                console.log(`\n\n${err}\n\n`)
                return res.sendStatus(403)
            }
            req.user = user
            next()
        })
    } else res.sendStatus(401)
}

function isLoggedIn(req:Request, res:Response, next:NextFunction) {
    // req.user ? next() : res.sendStatus(401)
    // console.log(`\n\n${JSON.stringify(req.headers)}\n\n`)
    // console.log(`\n\n${JSON.stringify(req.cookies)}\n\n`)
    passport.authenticate("jwt", { session: false }) ? next() : res.sendStatus(401)
}

app.get('/profile', verifyJWTi, (req, res) => {
    // const authHeader = req.headers.authorization
    // console.log(console.log(`dbgg ${authHeader}`))
    // res.header('Authorization', `JWT ${req.user}`)
    res.send(`Hello, ${JSON.stringify(req.user)}!`);
});

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
    res.send(`Initialized books: ${JSON.stringify(bookCount)}`);
});

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
    console.log(`⚡[server]: running on http://localhost:${port}/`);
});