import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MessageItem = ({ time, author, content }) => (
  <ListItem>
    <ListItemText>{`[${time}] ${author}> ${content}`}</ListItemText>
  </ListItem>
);

export default MessageItem;
