import express from 'express';
import path from 'path'

const app: express.Application = express();
const port: number = 3000;

app.use(express.static(path.join(__dirname, '../svelte/public')));

app.get('/', (_req, _res) => {
    _res.sendFile(path.join(__dirname, '../svelte/public', 'index.html'));
});

app.get('/api/example', (req, res) => {
    res.send('This is an example API response.');
});

app.listen(port, () => {
    console.log(`⚡[server]: running on http://localhost:${port}/`);
});