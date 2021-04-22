import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import Fruit from "./Fruit";
import axios from "axios";
import AudioPlayer from "./AudioPlayer";

export default class MainRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
    };
  }

  authenticate = () => {
    this.setState({
      authenticated: true,
    });
  };

  deAuthenticate = () => {
    this.setState({
      authenticated: false,
    });
  };

  logout = () => {
    axios
      .get("/apis/users/logout")
      .then(
        function (data) {
          this.deAuthenticate();
          window.location.reload();
        }.bind(this)
      )
      .catch(function (err) {
        console.log(err);
      });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Main
                {...props}
                authenticate={this.authenticate}
                deAuthenticate={this.deAuthenticate}
                authenticated={this.state.authenticated}
                logout={this.logout}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login
                {...props}
                authenticate={this.authenticate}
                deAuthenticate={this.deAuthenticate}
                authenticated={this.state.authenticated}
                logout={this.logout}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={(props) => (
              <Signup
                {...props}
                authenticate={this.authenticate}
                deAuthenticate={this.deAuthenticate}
                authenticated={this.state.authenticated}
                logout={this.logout}
              />
            )}
          />
          <Route
            path="/fruit"
            render={(props) => (
              <Fruit
                {...props}
                authenticate={this.authenticate}
                deAuthenticate={this.deAuthenticate}
                authenticated={this.state.authenticated}
                logout={this.logout}
              />
            )}
          />
          <Route
            path="/audioplayer"
            render={(props) => (
              <AudioPlayer
                {...props}
                authenticate={this.authenticate}
                deAuthenticate={this.deAuthenticate}
                authenticated={this.state.authenticated}
                logout={this.logout}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}