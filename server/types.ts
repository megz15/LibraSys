// export type AuthUser = {
//     user: UserType,
//     iat: number,
//     exp: number
// }

export type UserType = {
    uID: number,
    email: string,
    fName: string,
    uName: string,
    booksBorrowed: string,
    isAdmin: number,
    isPenalized: number,
}

type base_book = {
    bID: string,
    bName: string,
    genre: string,
    author: string,
}

export interface Book extends base_book {
    copyCount: number,
    borrowCount: number,
}

export interface CheckoutBook extends base_book {
    timeWhenCheckedOut: number
}