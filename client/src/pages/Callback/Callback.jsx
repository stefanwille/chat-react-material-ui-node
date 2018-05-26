import React, { Component } from "react";
import "./Callback.css";
import Auth from "../../services/Auth";
import { withRouter } from "react-router";

const auth = new Auth();

class Callback extends Component {
  render() {
    const { location, history } = this.props;
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication(history);
    }

    return <div className="Callback" />;
  }
}

export default withRouter(Callback);
