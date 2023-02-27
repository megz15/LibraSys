// Dependencies
var passport = require('passport');
import dotenv from 'dotenv';
dotenv.config({ path: 'server/.env' });
// import { User } from "./types";
// import { GOOGLE_CLIENT_ID } from '$env/static/private'

const GoogleStrategy = require('passport-google-oauth20').Strategy

// Setup JWT and Google options
const googleOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}

// Configure Google OAuth2 strategy
passport.use(new GoogleStrategy(googleOptions,
    function(accessToken:any, refreshToken:any, profile:any, done:any) {
        return done(null, profile)
    }
))

passport.serializeUser(function name(user:any, done:any) {
    done(null, user)
})

passport.deserializeUser(function name(user:any, done:any) {
    done(null, user)
})