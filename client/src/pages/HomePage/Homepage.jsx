import React from "react";

import { withRouter } from "react-router-dom";
import { Redirect } from "react-router";

import Auth from "../../services/Auth";
import { setUser } from "../../redux/modules/user";

class HomePage extends React.Component {
  render() {
    const auth = new Auth();
    if (auth.isAuthenticated()) {
      console.log("authenticated");
      return <Redirect to="/chat" />;
    }

    console.log("not authenticated");
    return <Redirect to="/login" />;
  }
}

export default withRouter(HomePage);
