const express = require('express');
const path = require('path');

const friendsRouter = require('./routers/friends.router');
const messagesRouter = require('./routers/messages.router');

const app = express();

const PORT = 3000;

app.use((req,res,next) => {
    const start = Date.now();
    next();
    //depois de encontrar o route do pedido realizado volta para o middleware para realizar mais acções 
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Hello, man!");
});

app.use('/friends',friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});