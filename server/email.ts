import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { MailType } from './types';
dotenv.config({path:'server/.env'});

export async function sendMail(mail:MailType) {
    const transport = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'libra.sys@hotmail.com',
            pass: process.env.PWD,
        },
    });
    
    transport.sendMail(mail)
}