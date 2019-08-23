import React, { Component } from "react";
import { Header, Container, Segment, List } from "semantic-ui-react";
export default class boarding extends Component {
  render() {
    return (
      <>
        <Container>
          <Header textAlign="center" as="h1">
            Horse Boarding and Care
          </Header>
          <Segment textAlign="center">
            At Sunflower Stables we believe that animals should be treated with
            the same respect you have for another person. We offer various
            boarding packages for people that are passionate about the sport but
            maybe do not have the space for a large animal.
          </Segment>
          <h3>Pasture Board</h3>
          <ul bulleted>
            <li>Grain feed minimum twice per day, hay four times.</li>
            <li>Fresh water replenished daily.</li>
            <li>Access to 10 acres of well maintained grazing fields.</li>
            <li>Supplements given as required, owner supplied.</li>
            <li>Heavy Blanketing in the winter, owner supplied.</li>
            <li>
              Full use of our facility including wash stall, arena, fields, tack
              room, and barn.
            </li>
            <li>
              Our farrier comes once every 7 months, the farrier's fee will be
              added to your boarding check if you choose to have your horse
              reshoed.
            </li>
          </ul>
          Pasture Boarding is $300 per month.
          <br />
          <h3>Stall Board</h3>
          <ul>
            <li>Grain feed minimum twice per day, hay four times.</li>
            <li>Fresh water replenished daily.</li>
            <li>Access to 10 acres of well maintained grazing fields.</li>
            <li>Supplements given as required, owner supplied.</li>
            <li>Heavy Blanketing in the winter, owner supplied.</li>
            <li>Summer:</li>
          </ul>
        </Container>
      </>
    );
  }
}
