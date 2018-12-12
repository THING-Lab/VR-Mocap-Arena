const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

const server = http.Server(app);

app.get('/', function(req, res){
  const htmlPath = path.resolve(__dirname, '../index.html');
  res.sendFile(htmlPath);
});

// Statically serve our `src` directory
app.use(express.static(path.resolve(__dirname, '../build')));

server.listen(3000, function(){
  console.log('listening on *:3000');
});