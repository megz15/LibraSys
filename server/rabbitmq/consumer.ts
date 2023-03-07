import amqp from 'amqplib';
import { sendMail } from '../email';
import dotenv from 'dotenv';
dotenv.config({path:'server/.env'});

(async () => {
    const conn = await amqp.connect('amqp://localhost');
    const channel = await conn.createChannel();

    // console.log('aaaaaaa')
    // console.log(process.env.PROJECT_EMAIL)

    await channel.consume('emailReminder', async (msg)=>{
        if (msg !== null) {

            const a = JSON.parse(msg.content.toString())

            await sendMail({
                from: process.env.PROJECT_EMAIL!,
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