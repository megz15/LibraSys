// Dependencies
import {createUser, getUser} from './server'
import passport from 'passport';
import { Strategy, StrategyOptions } from "passport-google-oauth20"
import * as jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config({ path: 'server/.env' });

// Setup JWT and Google options
const googleOptions:StrategyOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "/auth/google/callback"
}

// Configure Google OAuth2 strategy
passport.use(new Strategy(googleOptions,
    function(accessToken, refreshToken, profile:any, done) {
        let user = getUser('email', profile.emails[0].value)

        if (!user) { // If user doesn't exist, create new user in database
            createUser(profile.id, profile.emails[0].value, profile.name.givenName, profile.displayName)
            user = getUser('email', profile.emails[0].value)
        }
        
        // Return a JWT with the user profile
        const token = jwt.sign({user:user}, process.env.JWT_SECRET!, {expiresIn: '10m'})
        return done(null, token)
    }
))