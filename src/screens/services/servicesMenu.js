import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import Lessons from "./lessons";
import ForSale from "./forsale";
import Boarding from "./boarding";
export default class services extends Component {
  state = { activeItem: "Boarding" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const activeItem = this.state;
    console.log(this.state.activeItem);
    return (
      <div>
        <Grid>
          <Grid.Column width={3}>
            <Menu fluid vertical tabular stackable>
              <Menu.Item
                name="Boarding"
                active={activeItem.activeItem === "Boarding"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Lessons"
                active={activeItem.activeItem === "Lessons"}
                onClick={this.handleItemClick}
              >
                Riding Lessons
              </Menu.Item>
              <Menu.Item
                name="ForSale"
                active={activeItem.activeItem === "ForSale"}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={12}>
            <Segment>
              {activeItem.activeItem === "Lessons" ? (
                <Lessons />
              ) : activeItem.activeItem === "ForSale" ? (
                <ForSale />
              ) : activeItem.activeItem === "Boarding" ? (
                <Boarding />
              ) : null}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
