import React from "react";

import { withRouter } from "react-router-dom";
import { Redirect } from "react-router";

import Auth from "../../services/Auth";

class SignInPage extends React.Component {
  render() {
    const auth = new Auth();
    if (!auth.isAuthenticated()) {
      console.log("not authenticated");
      auth.login();
      return null;
    }

    console.log("authenticated");
    return <Redirect to="/chat" />;
  }
}

export default withRouter(SignInPage);
