const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const path = require('path');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, '/')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/', 'index.html'));
});

io.on('connection', function(socket){
  io.clients((error, clients) => io.emit('action', setUsersQuantity(clients.length)));
  io.emit('action', addMsgSuccessful(welcomeMessage));

  socket.on('disconnect', function(){
    io.clients((error, clients) => io.emit('action', setUsersQuantity(clients.length)));
  });

  socket.on('MSG_ADD', function(content){
    io.emit('action', addMsgSuccessful(content));
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

const welcomeMessage = ({
  author: 'HAL 9000',
  content: "hi, what's up?"
})

const addMsgSuccessful = content => ({
  type: 'MSG_ADD_SUCCESSFUL',
  payload: {
    time: new Date().getTime(),
    ...content
  }
});

const setUsersQuantity = payload => ({
  type: 'USERS_QUANTITY_SET',
  payload
});