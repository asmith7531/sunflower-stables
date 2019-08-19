import React, { Component } from "react";
import { Container, Grid, Header, List } from "semantic-ui-react";
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import "./style.css";
export default class footer extends Component {
  render() {
    return (
      <>
        <div className="top">
          <Grid divided inverted={true} stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Religious Ceremonies</List.Item>
                  <List.Item as="a">Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Banana Pre-Order</List.Item>
                  <List.Item as="a">DNA FAQ</List.Item>
                  <List.Item as="a">How To Access</List.Item>
                  <List.Item as="a">Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Footer Header
                </Header>
                <AwesomeButton type="facebook">FaceBook</AwesomeButton>
                <AwesomeButton type="instagram">Instagram</AwesomeButton>
                <AwesomeButton type="twitter">Share</AwesomeButton>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </>
    );
  }
}
