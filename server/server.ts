import express from 'express';
import Database from 'better-sqlite3'
import path from 'path'
import type { User, Book } from './types';

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

function initBooks() {
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

function createUser(email:string, fName:string, uName:string, pwd:string) {
    // Planning to use Mersenne Twister generator later for the UID instead of SQL autoincrement
    // to minimize the chances of malicious attacks based on sequential IDs
    db.exec(`insert into users values(${Date.now()}, '${email}', '${fName}', '${uName}', '${pwd}', 0, 0);`)
}

function showBooks():Book[] {
    const stmt = db.prepare(`select * from books`)
    const rows = stmt.all()
    return rows as Book[]
}

function searchBooks(searchedBook:string, limit=30):Book[] {
    const stmt = db.prepare(`select * from books where lower(books.bName) like lower('%'|| $searchedBook ||'%') limit $limit`)
    const rows = stmt.all({searchedBook, limit})
    return rows as Book[]
}

app.use(express.static(path.join(__dirname, '../svelte/public')));

app.get('/', (_req, _res) => {
    _res.sendFile(path.join(__dirname, '../svelte/public', 'index.html'));
});

app.get('/api/initBooks', (req, res) => {
    var bookCount = db.prepare('select count(*) from books').get()['count(*)']
    if (!bookCount) initBooks()
    res.send(`Initialized books: ${JSON.stringify(bookCount)}`);
});

app.listen(port, () => {
    console.log(`⚡[server]: running on http://localhost:${port}/`);
});