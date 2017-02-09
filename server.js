var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello User');
}).listen(8080);

console.log('Server running at http://localhost:8080');


module.exports = { server: server};
