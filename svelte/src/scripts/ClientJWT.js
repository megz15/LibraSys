// import * as jwt from "jsonwebtoken";
// Since I can't use external libraries with svelte/register
// Here's a custom JWT decoder

function decodeJWT(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export function getUserFromCookie(cookie) {
    return decodeJWT(cookie.slice(4))
}

// try {
//     return decodeJWT(document.cookie.slice(4))
// } catch (e) {
//     console.log(e)
// }