import React, { Component } from "react";
import SignInPage from "./pages/SignInPage";
import ChatPage from "./pages/ChatPage";
import Callback from "./pages/Callback";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createReduxStore from "./redux/createReduxStore";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    const store = createReduxStore();
    window.store = store;

    return (
      <Provider store={store}>
        <Router>
          <div className="App" style={{ marginTop: 40 }}>
            <Route exact path="/login" component={SignInPage} />
            <Route path="/chat" component={ChatPage} />
            <Route path="/callback" component={Callback} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
