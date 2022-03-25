const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req,res) => {
    res.send("Hello, man!");
});

app.get('/messages', (req,res) => {
    res.send('<ul> <li>Hello Alber</li> </ul>');
});

app.post('/messages', (req,res) => {
    console.log('updating messages');
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});