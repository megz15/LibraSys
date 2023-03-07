// export type AuthUser = {
//     user: UserType,
//     iat: number,
//     exp: number
// }

export type UserType = {
    uID: string,
    email: string,
    fName: string,
    uName: string,
    booksBorrowed: string,
    isAdmin: number,
    isPenalized: number,
}

export type Book = {
    bID: string,
    bName: string,
    genre: string,
    author: string,
    copyCount: number,
    borrowCount: number,
}

export type CheckoutBook = {
    timeWhenCheckedOut: number
    bID: string,
}

export type MailType = {
    from: string,
    to: string,
    subject: string,
    text: string
}