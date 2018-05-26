import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";

import { format } from "date-fns";

const stylesForMessage = {
  avatar: { maxWidth: 32, maxHeight: 32, marginRight: 5 },
  userName: {
    display: "inline-block",
    marginRight: 5,
  },
  timestamp: { display: "inline-block" },
};

const Message = withStyles(stylesForMessage)(({ message, classes }) => {
  const {
    user: { avatarUrl, userName },
    timestamp,
    text,
  } = message;
  return (
    <Grid container justify="flex-start">
      <Avatar className={classes.avatar} alt={userName} src={avatarUrl} />

      <div>
        <Typography variant="body2" className={classes.userName}>
          {userName}
        </Typography>
        <Typography variant="caption" className={classes.timestamp}>
          {format(timestamp, "HH:mm")}
        </Typography>
        <Typography variant="body1" paragraph>
          {text}
        </Typography>
      </div>
    </Grid>
  );
});

const stylesForMessageList = {};

const MessageList = ({ messages, classes }) => (
  <div>
    {messages.map(message => <Message key={message.id} message={message} />)}
  </div>
);

export default withStyles(stylesForMessageList)(MessageList);
