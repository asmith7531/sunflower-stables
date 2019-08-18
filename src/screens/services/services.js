import React, { Component } from "react";
import Menu from "./servicesMenu";
import NavBar from "../../components/navBar/navBar";
export default class services extends Component {
  render() {
    return (
        <NavBar/>
      <div className="main">
        <Menu />
      </div>
    );
  }
}
