import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/profil/Profile";
import ForgotPassword from "./components/auth/ForgotPassword";
import Analyze from "./components/analyze/Analyze";
import "./App.css";

export default class App extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/home">
              <Navbar view="map" />
              <Home />
              <Footer />
            </Route>
            <Route path="/analyze">
              <Navbar view="map" />
              <Analyze />
              <Footer />
            </Route>
            <Route path="/profile">
              <Navbar view="profile" />
              <Profile />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
