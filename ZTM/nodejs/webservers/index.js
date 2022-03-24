const http = require('http');

const PORT = 3000;

const server = http.createServer((req,res) =>{
    res.writeHead(200, {
        'Content-Type': 'application/json',     // diz o tipo de conteudo que devolvemos text/plain é texto normal.
    });
    res.end(JSON.stringify({
        id:1,
        name:"Sir Isaac Newton"
    }));
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}` );
}); //diz ao servidor(127.0.0.1 ou localhost) para ouvir requests
