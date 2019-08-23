import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
export default class horseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.img,
      name: props.name,
      breed: props.breed,
      description: props.description
    };
  }
  render() {
    const activeState = this.state;
    return (
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "2%"
        }}
      >
        <Image src={activeState.img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{activeState.name}</Card.Header>
          <Card.Meta>
            <span className="date">{activeState.breed}</span>
          </Card.Meta>
          <Card.Description>{activeState.description}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
