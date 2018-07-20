import { takeEvery, takeLatest } from 'redux-saga/effects';
import { notify } from '../utils/notifcation';

const addMessage = (socket, action) => {
  socket.emit('MSG_ADD', action.payload);
};

const sendNotification = action => notify(action.payload);

function* saga(socket) {
  yield takeEvery('MSG_ADD', addMessage, socket);
  yield takeLatest('NOTIFICATION', sendNotification);
}

export default saga;
