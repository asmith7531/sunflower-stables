import React, { Component } from "react";
import Home from "./screens/home/home";
import Horses from "./screens/horses/horses";
import ContactUs from "./screens/contactUs/contactUs";
import Services from "./screens/services/servicesMenu";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Responsive } from "semantic-ui-react";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Responsive>
            <Route exact path="/" component={Home} />
            <Route path="/horses" component={Horses} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/services" component={Services} />
          </Responsive>
        </div>
        <Footer />
      </Router>
    );
  }
}
