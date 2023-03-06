import amqp from 'amqplib'

export async function sendMessage(msg:string, delay:number, email:string) {
    const conn = await amqp.connect('amqp://localhost')
    const channel = await conn.createChannel()

    await channel.assertQueue('emailReminder', {durable: true})

    await channel.assertExchange('emailExchange', 'x-delayed-message', {
        arguments: {'x-delayed-type': 'direct'}
    })

    await channel.bindQueue('emailReminder', 'emailExchange', 'a')

    channel.publish(
        'emailExchange', 'a',
        Buffer.from(JSON.stringify({
            subject: "Reminder",
            body: msg,
            email: email
        })), {headers: {'x-delay': delay}}
    )

    console.log(`Message sent to queue with a delay of ${delay} ms`)
    
    await channel.close()
    await conn.close()
}

// sendMessage('{"subject":"Reminder","body":"Test","id":"meghraj.g16@gmail.com"}', 1000)