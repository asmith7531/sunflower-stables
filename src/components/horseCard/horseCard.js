import React, { Component } from "react";
import { Card } from "semantic-ui-react";
export default class horseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      breed: props.breed,
      description: props.description
    };
  }
  render() {
    const activeState = this.state;
    return (
      <div>
        <Card
          link
          header={activeState.name}
          meta={activeState.breed}
          description={activeState.description}
        />
      </div>
    );
  }
}
