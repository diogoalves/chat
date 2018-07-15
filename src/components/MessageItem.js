import React from 'react';
import Typography from '@material-ui/core/Typography';

const MessageItem = ({ time, author, content }) => (
  <Typography component="p">
    <em>
      <small>{time}</small>
    </em>
    <strong>{` ${author}> `}</strong>
    {content}
  </Typography>
);

export default MessageItem;
