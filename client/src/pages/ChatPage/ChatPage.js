import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import uuidv1 from "uuid/v1";
import { withRouter } from "react-router-dom";
import io from "socket.io-client";

import MessageList from "./MessageList";
import InputArea from "./InputArea";
import { getUser } from "../../redux/modules/user";
import { getMessages, addMessage } from "../../redux/modules/messages";
import Auth from "../../services/Auth";
import { removeUser } from "../../redux/modules/user";

const auth = new Auth();

class ChatPage extends React.Component {
  componentDidMount() {
    this.socket = io();
    this.socket.on("chat message", this.props.onMessageReceived);
  }

  onSubmit = formValues => {
    const id = uuidv1();
    const { user, onMessageSubmitted } = this.props;
    const { text } = formValues;
    const message = { id, user, text, timestamp: new Date() };
    onMessageSubmitted(message);
    this.socket.emit("chat message", message);
  };

  render() {
    const { messages, onSignOut } = this.props;

    return (
      <Grid container justify="center">
        <Grid item style={{ flexGrow: 1, maxWidth: 1000 }}>
          <Grid container>
            <Grid item xs={12}>
              <div style={{ textAlign: "right", marginBottom: 30 }}>
                <Button color="default" onClick={onSignOut}>
                  Sign Out
                </Button>
              </div>
              <Paper elevation={2} style={{ padding: 20 }}>
                <MessageList messages={messages} />
                <InputArea onSubmit={this.onSubmit} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: getUser(state),
    messages: getMessages(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    onSignOut() {
      const { history } = ownProps;
      auth.logout(history);
      dispatch(removeUser());
      history.push("/login");
    },
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    onMessageSubmitted(message) {
      console.log("message submitted", message);
      dispatch(addMessage(message));
    },
    onMessageReceived(message) {
      console.log("message received", message);
      dispatch(addMessage(message));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  withRouter(ChatPage),
);
