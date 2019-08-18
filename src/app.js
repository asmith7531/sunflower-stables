import React, { Component } from "react";
import NavBar from "./components/navBar/navBar";
import Home from "./screens/home/home";
import Horses from "./screens/horses/horses";
import Lessons from "./screens/lessons/lessons";
import { BrowserRouter, Route } from "react-router-dom";
export default class app extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <NavBar />
            <Route path="/" component={Home} />
            <Route path="/horses" component={Horses} />
            <Route path="/lessons" component={Lessons} />
          </div>
        </BrowserRouter>
      </>
    );
  }
}
