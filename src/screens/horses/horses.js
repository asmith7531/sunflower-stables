import React, { Component } from "react";
import Horse from "../../components/horseCard/horseCard";
export default class horses extends Component {
  render() {
    return (
      <div>
        Horses
        <Horse
          name="Bella"
          breed="Thoroughbred"
          description="Bella is fast as fuck!"
        />
      </div>
    );
  }
}
