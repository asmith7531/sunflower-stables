import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";
import Horse from "../../components/horseCard/horseCard";
export default class forsale extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">Horses For Sale</Header>
        <Horse
          name="Nigel"
          breed="I am not sure what breed he is"
          description="I dont know how to describe this horse, it looks like a regular horse but this one is black."
        />
      </Container>
    );
  }
}
