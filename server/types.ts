export type User = {
    uID: number,
    email: string,
    fName: string,
    uName: string,
    pwd: string,
    booksBorrowed: string,
    isAdmin: number,
}

export type Book = {
    bID: string,
    bName: string,
    genre: string,
    author: string,
    copyCount: number,
    borrowCount: number,
}