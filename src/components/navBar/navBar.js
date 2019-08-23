import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Sunflower from "../../../dist/7ca8a91d64dbfb901833a07aabfc2adc.png";
export default class navBar extends Component {
  state = { activeItem: "" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Menu className="navBar" stackable style={{ marginBottom: "0px" }}>
        <Menu.Item as={Link} to="/">
          <img src={Sunflower} />
        </Menu.Item>
        <Menu.Item
          onClick={this.handleItemClick}
          active={activeItem === "home"}
          name="home"
          as={Link}
          to="/"
        >
          Home
        </Menu.Item>
        <Menu.Item
          onClick={this.handleItemClick}
          active={activeItem === "horses"}
          name="horses"
          as={Link}
          to="/horses"
        >
          Meet The Horses
        </Menu.Item>
        <Menu.Item
          onClick={this.handleItemClick}
          active={activeItem === "services"}
          name="services"
          as={Link}
          to="/services"
        >
          Services
        </Menu.Item>
        <Menu.Item
          onClick={this.handleItemClick}
          active={activeItem === "contact-us"}
          name="contact-us"
          as={Link}
          to="/contact-us"
        >
          Contact Us
        </Menu.Item>
      </Menu>
    );
  }
}
