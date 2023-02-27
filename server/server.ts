import express, { Request, Response, NextFunction } from 'express';
import Database from 'better-sqlite3'
import path from 'path'
import type { User, Book } from './types';
import passport from 'passport'
import './auth'

const app: express.Application = express();
const port: number = 3000;

const db = new Database('./server/data.db', {verbose: console.log})
db.pragma('journal_mode = WAL')

db.exec(`create table if not exists users (
    uID integer primary key unique,
    email text unique,
    fName text default null,
    uName text unique,
    pwd text default null,
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

function createUser(email:string, fName:string, uName:string, pwd:string) {
    // Planning to use Mersenne Twister generator later for the UID instead of SQL autoincrement
    // to minimize the chances of malicious attacks based on sequential IDs
    db.exec(`insert into users values(${Date.now()}, '${email}', '${fName}', '${uName}', '${pwd}', 0, 0);`)
}

app.use(express.static(path.join(__dirname, '../svelte/public')));

// Define a middleware function
const logRequests = (req:Request, res:Response, next:NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware function or route handler
};

// Add the middleware function to the application
app.use(logRequests);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../svelte/public', 'index.html'));
});

app.get('/auth/google', 
    passport.authenticate('google', {scope: ['email', 'profile']})
)

app.get('/auth/google/callback',
    passport.authenticate('google', {successRedirect: '/profile', failureRedirect: '/auth/failure'})
)

app.get('/auth/failure', (req, res)=>{
    res.send('Something went wrong!')
})

function isLoggedIn(req:Request, res:Response, next:NextFunction) {
    req.user ? next() : res.sendStatus(401)
}

app.get('/profile', isLoggedIn, (req, res) => {
    res.send("Hello!");
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

app.get('/signin', (req,res)=>{

})

app.listen(port, () => {
    console.log(`⚡[server]: running on http://localhost:${port}/`);
});