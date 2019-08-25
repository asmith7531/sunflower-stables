import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";
import Horse from "../../components/horseCard/horseCard";
import Nigel from "../../../dist/img/nigel.jpg";
export default class forsale extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">Horses For Sale</Header>
        <Horse
          img={Nigel}
          name="Nigel"
          breed="Registered Quarter Horse"
          description="Nigel is a beautiful quarter horse standing at 14.2 hands. He is 4 years old, so green but very even tempered. An amatuer riders can  easily ride him. He is registered with the AQHA."
        />
        <Horse
          img={Chico}
          name="Chico"
          breed="I am not sure??"
          description="Pretty sure Meagan sold this one."
        />
      </Container>
    );
  }
}
