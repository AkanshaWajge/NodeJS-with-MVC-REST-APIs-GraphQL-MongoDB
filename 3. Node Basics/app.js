//to run the file use command : node app.js

//Creating server using node js core module http, their are other core modules as well.
const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  res.write('<body><h1>Hello from nodejs server!!</h1></body>');
  res.write('</html>');
  res.end();
})

server.listen(3000);