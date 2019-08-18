import React, { Component } from "react";
import Menu from "./servicesMenu";
import { Container } from "semantic-ui-react";
import NavBar from "../../components/navBar/navBar";
export default class services extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Menu />
        </Container>
      </div>
    );
  }
}
