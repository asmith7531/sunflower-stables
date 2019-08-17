import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import Sunflower from "../../../dist/7ca8a91d64dbfb901833a07aabfc2adc.png";
export default class navBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <img src={Sunflower} />
        </Menu.Item>

        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="horses"
          active={activeItem === "horses"}
          onClick={this.handleItemClick}
        >
          Meet The Horses
        </Menu.Item>

        <Menu.Item
          name="lessons"
          active={activeItem === "lessons"}
          onClick={this.handleItemClick}
        >
          Lessons
        </Menu.Item>
      </Menu>
    );
  }
}
