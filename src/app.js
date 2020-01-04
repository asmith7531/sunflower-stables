import React, { Component } from "react";
import Home from "./screens/home/home";
import NavBar from "./components/navBar/navBar";
import Horses from "./screens/horses/horses";
import ContactUs from "./screens/contactUs/contactUs";
import Services from "./screens/services/services";
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/horses" component={Horses} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/services" component={Services} />
        </Router>
      </>
    );
  }
}
