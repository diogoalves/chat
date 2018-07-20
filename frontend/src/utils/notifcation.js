export const notify = message => {
  if (Notification.permission === 'granted') {
    new Notification(message);
  }
};

export const askPermission = () => {
  Notification.requestPermission();
};
