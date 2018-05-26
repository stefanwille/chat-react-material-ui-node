import React, { Component } from "react";
import "./Callback.css";
import Auth from "../../services/Auth";
import { withRouter } from "react-router";
import { setUser } from "../../redux/modules/user";
import { connect } from "react-redux";

const auth = new Auth();

const mapDispatchToProps = dispatch => ({
  onLoggedIn: userId => {
    console.log("onLoggedIn", userId);
  },
});

class Callback extends Component {
  render() {
    const { location, history, onLoggedIn } = this.props;
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication(history, onLoggedIn);
    }

    return <div className="Callback" />;
  }
}

export default connect(null, mapDispatchToProps)(withRouter(Callback));
