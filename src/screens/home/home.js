import React, { Component } from "react";
import NavBar from "../../components/navBar/navBar";
import { Container, Header } from "semantic-ui-react";
export default class home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container textAlign="center" className="landing-header">
          <Header size="large">Sunflower Stables</Header>
        </Container>
      </div>
    );
  }
}
