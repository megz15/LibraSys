import amqp from 'amqplib';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config({path:'server/.env'});

(async () => {
    const conn = await amqp.connect('amqp://localhost');
    const channel = await conn.createChannel();

    channel.consume('emailReminder', (msg)=>{
        if (msg !== null) {

            const a = JSON.parse(msg.content.toString())

            const transport = nodemailer.createTransport({
                service: 'hotmail',
                auth: {
                    user: 'libra.sys@hotmail.com',
                    pass: process.env.PWD,
                },
            });
            
            transport.sendMail({
                from: 'libra.sys@hotmail.com',
                to: a.email,
                subject: a.subject,
                text: a.body
            })

            console.log('Recieved:', a);

            channel.ack(msg)
        } else {
            console.log('Consumer cancelled by server');
        }
    })
})();