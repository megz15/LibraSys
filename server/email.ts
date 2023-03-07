import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { MailType } from './types';
dotenv.config({path:'server/.env'});

export async function sendMail(mail:MailType) {
    const transport = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: process.env.PROJECT_EMAIL,
            pass: process.env.PWD,
        },
    });
    
    transport.sendMail(mail)
}