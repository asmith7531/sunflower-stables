import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
export default class services extends Component {
  state = { activeItem: "Lessons" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name="Lessons"
                active={activeItem === "bio"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Boarding"
                active={activeItem === "pics"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="For Sale"
                active={activeItem === "companies"}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment>
              This is an stretched grid column. This segment will always match
              the tab height
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
