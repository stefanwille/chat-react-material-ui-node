import React, { Component } from "react";
import axios from "axios";
import "./Callback.css";
import Auth from "../../services/Auth";
import { withRouter } from "react-router";
import { setUser } from "../../redux/modules/user";
import { connect } from "react-redux";

const auth = new Auth();

const mapDispatchToProps = dispatch => ({
  onLoggedIn: async auth0User => {
    console.log("onLoggedIn", auth0User);
    const { sub: auth0ProviderAndUserId } = auth0User;
    const [provider, auth0UserId] = auth0ProviderAndUserId.split("|");
    console.log("onLoggedIn", provider, auth0UserId);
    const response = await axios.get(
      `https://api.github.com/user/${auth0UserId}`,
    );
    const gitHubUser = response.data;
    const user = {
      userId: gitHubUser.id,
      userName: gitHubUser.name,
      avatarUrl: gitHubUser.avatar_url,
    };
    console.log("onLoggedIn githubuser", gitHubUser, "user", user);

    dispatch(setUser(user));
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
