import React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Form, Field } from "react-final-form";

import { setUser } from "../../redux/modules/user";
import STOCK_AVATARS from "../../components/StockAvatars";

console.log("STOCK", STOCK_AVATARS);

const avatarItems = STOCK_AVATARS.map((url, index) => (
  <MenuItem key={index} value={url}>
    <img src={url} alt="avatar" style={{ maxWidth: 32 }} />
  </MenuItem>
));

const styles = {
  avatar: {
    // minHeight: 100
  }
};

class SignInPage extends React.Component {
  render() {
    const { onSubmit, classes } = this.props;

    return (
      <Grid container justify="center">
        <Grid item style={{ flexGrow: 1, maxWidth: 500 }}>
          <Grid container>
            <Grid item xs={12}>
              <Paper
                elevation={1}
                style={{
                  padding: 25,
                  backgroundColor: "#3f51b5"
                }}
              >
                <Typography
                  variant="title"
                  component="h1"
                  style={{ fontSize: 30, textAlign: "center", color: "white" }}
                >
                  Chat Demo
                </Typography>
              </Paper>

              <Form
                onSubmit={onSubmit}
                validate={values => {
                  const errors = {};
                  if (!values.userName) errors.userName = "Missing";
                  if (!values.avatarUrl) errors.avatarUrl = "Missing";
                  return errors;
                }}
                render={({ handleSubmit, pristine, invalid, reset }) => {
                  return (
                    <Paper elevation={1} style={{ padding: 50 }}>
                      <Typography
                        variant="title"
                        component="h2"
                        color="primary"
                        paragraph
                        style={{ marginBottom: 30 }}
                      >
                        Sign In
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
                        render={({ input, meta }) => {
                          console.log(meta);
                          return (
                            <TextField
                              label="Username"
                              style={{ display: "block" }}
                              margin="dense"
                              error={!!(meta.touched && meta.error)}
                              {...input}
                            />
                          );
                        }}
                      />
                      <Field
                        name="avatarUrl"
                        render={({ input, meta }) => (
                          <FormControl
                            style={{ display: "block", marginBottom: 30 }}
                            error={!!(meta.touched && meta.error)}
                          >
                            <InputLabel htmlFor="avatar">Avatar</InputLabel>
                            <Select
                              style={{ minWidth: 80 }}
                              {...input}
                              // className={classes.avatar}
                            >
                              {avatarItems}
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
      history.push("/chat");
    }
  };
}

export default connect(null, mapDispatchToProps)(
  withRouter(withStyles(styles)(SignInPage))
);
