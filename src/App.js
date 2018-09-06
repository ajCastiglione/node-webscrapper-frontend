// NPM modules
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
// Local imports
import Header from "./components/Header";
import Register from "./pages/Register";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.loggedIn ? (
          <Route
            path="/"
            render={() => (
              <div className="logged-out">
                <h2>Please login or signup to view your account</h2>
                <Button variant="contained" color="primary" className="btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="contained" color="secondary" className="btn">
                  <Link to="/signup">Signup</Link>
                </Button>
              </div>
            )}
          />
        ) : (
          <Route
            path="/"
            render={() => (
              <div className="logged-in">
                <h2>Welcome back -username here-</h2>
              </div>
            )}
          />
        )}
        <Route exact path="/signup" component={Register} />
      </div>
    );
  }
}

export default App;
