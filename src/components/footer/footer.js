import React, { Component } from "react";
import {
  Container,
  Segment,
  Header,
  Grid,
  List,
  Divider,
  Image,
  Responsive
} from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import Sunflower from "../../../dist/img/sunflower.png";
export default class footer extends Component {
  render() {
    return (
      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        <Container textAlign="center">
          <Responsive minWidth={775}>
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="More" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={2}>
                <Header inverted as="h4" content="Group 2" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as="h4" content="Social Media" />

                <AwesomeButton
                  type="facebook"
                  href="https://www.facebook.com/pg/Sunflower-Stables-1498044870328263/services/?service_id=2473190119420371&ref=page_internal"
                >
                  FaceBook
                </AwesomeButton>
              </Grid.Column>
            </Grid>
          </Responsive>
          <Divider inverted section />
          <Image centered size="mini" src={Sunflower} />
          <List horizontal inverted divided link size="small">
            <List.Item as={Link} to="/contact-us">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    );
  }
}
