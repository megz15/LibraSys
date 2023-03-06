import amqp from 'amqplib';
import { sendMail } from '../email';

(async () => {
    const conn = await amqp.connect('amqp://localhost');
    const channel = await conn.createChannel();

    await channel.consume('emailReminder', async (msg)=>{
        if (msg !== null) {

            const a = JSON.parse(msg.content.toString())

            await sendMail({
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