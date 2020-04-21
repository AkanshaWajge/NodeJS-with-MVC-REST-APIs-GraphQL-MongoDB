//This is the entry file (mainfile) : node app.js
const http = require('http');

const express= require('express');

const app = express();

const server = http.createServer(app);

server.listen(3000);
