import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Form, Field } from "react-final-form";

const InputArea = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    validate={values => {
      return !values.text ? "text missing" : undefined;
    }}
    render={({ handleSubmit, pristine, invalid, reset }) => {
      return (
        <Grid container style={{ marginTop: 10 }}>
          <Field
            name="text"
            render={({ input, meta }) => (
              <TextField
                label="Your Message"
                style={{ flexGrow: 1 }}
                onKeyDown={event => {
                  if (event.key === "Enter") {
                    handleSubmit();
                    reset();
                  }
                }}
                {...input}
              />
            )}
          />
          <Button
            variant="raised"
            color="primary"
            style={{ margin: 12 }}
            onClick={() => {
              handleSubmit();
              reset();
            }}
          >
            Send
          </Button>
        </Grid>
      );
    }}
  />
);

export default InputArea;
