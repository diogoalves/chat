import { takeEvery } from 'redux-saga/effects';

function* addMessage(socket, action) {
  socket.emit('MSG_ADD', action.payload);
}

function* saga(socket) {
  yield takeEvery('MSG_ADD', addMessage, socket);
}

export default saga;
