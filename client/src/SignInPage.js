import React from 'react';
import Paper from 'material-ui/Paper';
import STOCK_AVATARS from './StockAvatars';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { Form, Field } from 'react-final-form';
import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from './redux/modules/user';

class SignInPage extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <Grid container justify="center">
        <Grid item style={{ flexGrow: 1, maxWidth: 500 }}>
          <Grid container>
            <Grid item xs={12}>
              <Form
                onSubmit={onSubmit}
                validate={values => {
                  if (!values.userName) return 'userName missing';
                  if (!values.avatarUrl) return 'avatarUrl missing';
                  return undefined;
                }}
                render={({ handleSubmit, pristine, invalid, reset }) => {
                  return (
                    <Paper elevation={1} style={{ padding: 50 }}>
                      <Typography
                        variant="title"
                        component="h1"
                        color="primary"
                        paragraph
                        style={{ marginBottom: 30 }}
                      >
                        Login
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        style={{}}
                        paragraph
                      >
                        Please enter your username and select your avatar.
                      </Typography>
                      <Field
                        name="userName"
                        render={({ input, meta }) => (
                          <TextField
                            label="Username"
                            style={{ display: 'block' }}
                            margin="dense"
                            {...input}
                          />
                        )}
                      />
                      <Field
                        name="avatarUrl"
                        render={({ input, meta }) => (
                          <FormControl
                            style={{ display: 'block', marginBottom: 30 }}
                          >
                            <InputLabel htmlFor="avatar">Avatar</InputLabel>
                            <Select style={{ minWidth: 80 }} {...input}>
                              {STOCK_AVATARS.map((url, index) => (
                                <MenuItem key={index} value={url}>
                                  <img
                                    src={url}
                                    alt="avatar"
                                    style={{ maxWidth: 32 }}
                                  />
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      />
                      <Button
                        variant="raised"
                        color="primary"
                        style={{ marginTop: 12 }}
                        onClick={handleSubmit}
                      >
                        Sign In
                      </Button>
                    </Paper>
                  );
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const { history } = ownProps;
  return {
    onSubmit(formValues) {
      dispatch(setUser(formValues));
      history.push('/chat');
    }
  };
}

export default connect(null, mapDispatchToProps)(withRouter(SignInPage));