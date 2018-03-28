import React from 'react';

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import format from 'date-fns/format';

const Message = ({ message }) => {
  const { user: { avatarUrl, userName }, timestamp, text } = message;
  return (
    <Grid container style={{ justifyContent: 'flex-start' }}>
      <img
        style={{ maxWidth: 32, maxHeight: 32, marginRight: 5 }}
        src={avatarUrl}
        alt={userName}
      />
      <div>
        <Typography
          variant="body2"
          style={{ display: 'inline-block', marginRight: 5 }}
        >
          {userName}
        </Typography>
        <Typography variant="caption" style={{ display: 'inline-block' }}>
          {format(timestamp, 'HH:mm')}
        </Typography>
        <Typography variant="body1" paragraph>
          {text}
        </Typography>
      </div>
    </Grid>
  );
};

const MessageList = ({ messages }) => (
  <div>
    {messages.map(message => <Message key={message.id} message={message} />)}
  </div>
);

export default MessageList;
