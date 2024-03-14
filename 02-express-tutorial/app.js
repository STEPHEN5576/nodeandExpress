const http = require('http');
const server = http.createServer((req, res) =>{
 res.end('user hit the server')
})
server.listen(5000);