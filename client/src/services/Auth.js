import auth0 from "auth0-js";

class Auth {
  webAuth = new auth0.WebAuth({
    domain: "chatdemo.eu.auth0.com",
    clientID: "gqLDEMxRZ1pm8lAn7LtnD5NXWyjvq5Zy",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://chatdemo.eu.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid",
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.webAuth.authorize();
  }

  handleAuthentication(history) {
    this.webAuth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(history, authResult);
        history.push("/chat");
      } else if (err) {
        history.push("/chat");
        console.log(err);
      }
    });
  }

  setSession(history, authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime(),
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);

    console.log("id_token", authResult.idToken);

    this.webAuth.client.userInfo(authResult.accessToken, function(error, user) {
      // Now you have the user's information
      console.log("error", error, "user", user);
    });

    // navigate to the home route
    history.push("/");
  }

  logout(history) {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    // navigate to the home route
    history.push("/");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}

export default Auth;
