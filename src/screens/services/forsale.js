import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";
import Horse from "../../components/horseCard/horseCard";
export default class forsale extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">Horses For Sale</Header>
        <Horse
          name="Chico"
          breed="I am not sure??"
          description="Pretty sure Meagan sold this one already but I need fake horse names."
        />
      </Container>
    );
  }
}
