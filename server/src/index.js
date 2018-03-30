const express = require('express');
const http = require('http');
const morgan = require('morgan');
const socketIo = require('socket.io');

const PORT = 5000;

const app = express();
app.use(morgan('combined'));
const httpServer = http.Server(app);
const io = socketIo(httpServer);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('some client connected');
  socket.on('chat message', function(msg) {
    console.log('emitting message', msg);
    io.emit('chat message', msg);
  });
});

httpServer.listen(PORT, function() {
  console.log('listening on http://localhost:' + PORT);
});
