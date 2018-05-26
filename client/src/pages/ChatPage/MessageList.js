import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { format } from "date-fns";

const Message = ({ message }) => {
  const {
    user: { avatarUrl, userName },
    timestamp,
    text,
  } = message;
  return (
    <Grid container style={{ justifyContent: "flex-start" }}>
      <Avatar
        style={{ maxWidth: 32, maxHeight: 32, marginRight: 5 }}
        alt={userName}
        src={avatarUrl}
      />

      <div>
        <Typography
          variant="body2"
          style={{ display: "inline-block", marginRight: 5 }}
        >
          {userName}
        </Typography>
        <Typography variant="caption" style={{ display: "inline-block" }}>
          {format(timestamp, "HH:mm")}
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
