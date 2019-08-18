import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Sunflower from "../../../dist/7ca8a91d64dbfb901833a07aabfc2adc.png";
export default class navBar extends Component {
  state = {
    activeItem: ""
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item as={Link} to="/">
          <img src={Sunflower} />
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="horses"
          name="horses"
          active={activeItem === "horses"}
          onClick={this.handleItemClick}
        >
          Meet The Horses
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="lessons"
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
