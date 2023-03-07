// Dependencies
import {createUser, getUser} from './server'
import passport from 'passport';
import { Strategy, StrategyOptions } from "passport-google-oauth20"
import * as jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config({ path: 'server/.env' });

// Setup Google options
const googleOptions:StrategyOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "/auth/google/callback"
}

// Configure Google OAuth2 strategy
passport.use(new Strategy(googleOptions,
    async function(accessToken, refreshToken, profile:any, done) {
        let user = await getUser('email', profile.emails[0].value)

        if (!user) { // If user doesn't exist, create new user in database

            // Not going to do error handling here to check
            // if the fields exist previously
            // since the ones that are supposed to be unique
            // (id, email and username)
            // are guaranteed to be unique within the same org

            await createUser(
                profile.id,
                profile.emails[0].value,
                profile.name.givenName,
                profile.emails[0].value.split('@')[0] //profile.displayName
            )

            user = await getUser('email', profile.emails[0].value)
        }
        
        // Return a JWT with the user profile
        const token = jwt.sign(
            {user:user},
            process.env.JWT_SECRET!,
            {expiresIn: process.env.EXPIRYMS}
        )
        return done(null, token)
    }
))