const http = require('http');
const server = http.createServer((req, res) => {res.end("jjj")});

server.listen(3000);
