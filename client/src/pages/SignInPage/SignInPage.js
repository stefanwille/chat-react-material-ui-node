import React from "react";

import { withRouter } from "react-router-dom";
import { Redirect } from "react-router";

import Auth from "../../services/Auth";

class SignInPage extends React.Component {
  render() {
    const auth = new Auth();
    if (auth.isAuthenticated()) {
      return <Redirect to="/chat" />;
    }

    auth.login();
    return null;
  }
}

export default withRouter(SignInPage);
