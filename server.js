const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const path = require('path');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/build/index.html');
});

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

io.on('connection', function(socket){
  socket.broadcast.emit('hi');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});