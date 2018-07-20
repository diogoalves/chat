const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const path = require('path');

app.use(express.static(path.join(__dirname, '/')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/', 'index.html')));

io.on('connection', (socket) => {
  io.clients((error, clients) => {
    io.emit('action', actions.setUsersQuantity(clients.length))
    io.emit('action', actions.addMsgSuccessful(welcomeMessage(clients.length), true));
  });

  socket.on('disconnect', () => io.clients((error, clients) => io.emit('action', actions.setUsersQuantity(clients.length))));
  socket.on('MSG_ADD', payload => {
    io.emit('action', actions.addMsgSuccessful(payload, true));
    socket.broadcast.emit('action', actions.sendNotification(`New message from ${payload.author}`))
  });
});

http.listen(3000, () => console.log('listening on *:3000'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const createAction = type => (payload, withTime) => ({ type, payload: !withTime ? payload : {...payload, time: new Date().getTime()} });

const actions = ({
  addMsgSuccessful: createAction('MSG_ADD_SUCCESSFUL'),
  setUsersQuantity: createAction('USERS_QUANTITY_SET'),
  sendNotification: createAction('NOTIFICATION')
});

const welcomeMessage = members => {
  let content;
  if(members === 1) {
    content = 'Hi, you are the first person in this chat room. What´s up?'
  } else {
    content = `Someone just arrived. Now we are ${members} in total.`
  }
  return ({
    author: 'HAL 9000',
    content    
  });
}