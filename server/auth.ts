// Dependencies
// import Database from 'better-sqlite3'
import {createUser, getUser} from './server'
var passport = require('passport');
import dotenv from 'dotenv';
dotenv.config({ path: 'server/.env' });
// import { User } from "./types";
// import { GOOGLE_CLIENT_ID } from '$env/static/private'

const GoogleStrategy = require('passport-google-oauth20').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJWT

// const db = new Database('./server/data.db', {verbose: console.log})
// db.pragma('journal_mode = WAL')

// Setup JWT and Google options
const googleOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}

const jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

// Configure Google OAuth2 strategy
passport.use(new GoogleStrategy(googleOptions,
    function(accessToken:any, refreshToken:any, profile:any, done:any) {
        try{
            // return done(null, profile)
            // Check if user exists in database
            // const user = db
            //     .prepare('SELECT * FROM users WHERE email = ?')
            //     .get(profile.emails[0].value);
            const user = getUser('email', profile.emails[0].value)

            if (!user) {
                // If user doesn't exist, create new user in database
                createUser(profile.emails[0].value,profile.displayName,profile.displayName)
                const newUser = getUser('email', profile.emails[0].value)

                return done(null, newUser);
            }
            
            // If user already exists, return the user
            return done(null, user)
        } catch (err) {
            return done(err)
        }
    }
))

// Configure JWT strategy
passport.use(new JwtStrategy(jwtOptions,
    function(jwtPayload:any, done:any) {
        try{
            // Find user in database based on JWT payload
            const user = getUser('id', jwtPayload.sub)
            if (user) {
                // If user is found, return the user
                return done(null, user)
            }
            // Elif user is not found, return false
            return done(null, false)
        } catch (err) {
            return done(err)
        }
    }
))

// Serialize & deserialize user for session
passport.serializeUser(function name(user:any, done:any) {
    done(null, user.id)
})

passport.deserializeUser(function name(user:any, done:any) {
    done(null, user)
})