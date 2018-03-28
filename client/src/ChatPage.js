import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import MessageList from './MessageList';
import InputArea from './InputArea';
import { connect } from 'react-redux';
import { getUser } from './redux/modules/user';
import { getMessages, addMessage } from './redux/modules/messages';
import Button from 'material-ui/Button';
import { withRouter } from 'react-router-dom';

class Chat extends React.Component {
  render() {
    const { messages, onMessageSubmit, onSignOut } = this.props;

    return (
      <Grid container justify="center">
        <Grid item style={{ flexGrow: 1, maxWidth: 1000 }}>
          <Grid container>
            <Grid item xs={12}>
              <div style={{ textAlign: 'right', marginBottom: 30 }}>
                <Button color="default" onClick={onSignOut}>
                  Sign Out
                </Button>
              </div>
              <Paper elevation={2} style={{ padding: 20 }}>
                <MessageList messages={messages} />
                <InputArea onSubmit={onMessageSubmit} />
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
    messages: getMessages(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    onSignOut() {
      const { history } = ownProps;
      history.push('/');
    }
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { user } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    onMessageSubmit(formValues) {
      const { text } = formValues;
      const timestamp = new Date();
      const message = { user, timestamp, text };
      dispatch(addMessage(message));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  withRouter(Chat)
);
