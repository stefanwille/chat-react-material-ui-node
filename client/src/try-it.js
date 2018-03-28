console.log('**a');
const io = require('socket.io-client');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('**b');
const socket = io('http://localhost:5000');

console.log('**c');
socket.emit('chat message', 'test msg');

rl.question('What is your message? ', answer => {
  socket.emit('chat message', answer);

  rl.close();
});
