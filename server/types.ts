export type AuthUser = {
    user: UserType,
    iat: number,
    exp: number
}

export type UserType = {
    uID: number,
    email: string,
    fName: string,
    uName: string,
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