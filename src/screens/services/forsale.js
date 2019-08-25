import React, { Component } from "react";
import { Header, Container, Link, Segment } from "semantic-ui-react";
import Horse from "../../components/horseCard/horseCard";
import Nigel from "../../../dist/img/nigel.jpg";
import Chico from "../../../dist/img/chico.jpeg";

export default class forsale extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">For Sale</Header>
        <Segment>
          <Link to="/contact-us">Contact us</Link> for more information or to
          schedule a time to meet them in person.
        </Segment>
        <Horse
          img={Nigel}
          name="Nigel"
          breed="Registered Quarter Horse"
          description="Nigel is a beautiful quarter horse standing at 14'2 hands. He is 4 years old, so still green but also very even tempered. An amatuer riders can  easily ride him. He is registered with the AQHA."
        />
        <Horse
          img={Chico}
          name="Chico"
          breed="Grade Quarter Horse"
          description="Chico is a large 14'2 grade quarter horse gelding. He is a proven beginner lesson pony. He has taught many kids various skills from lead line to walk trot, to show jumping. He can go on trail rides, do jumps and lessons, on and off the farm. He is an amazing all around pony at only 4 years old and has the easiest temperment for any level rider."
        />
      </Container>
    );
  }
}
