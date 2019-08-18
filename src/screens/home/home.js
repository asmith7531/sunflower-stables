import React, { Component, useCallback } from "react";
import NavBar from "../../components/navBar/navBar";

import {
  Container,
  Header,
  Segment,
  Grid,
  Button,
  Image,
  Icon
} from "semantic-ui-react";
import "./style.css";
import Sunflower from "../../../dist/7ca8a91d64dbfb901833a07aabfc2adc.png";
import HorseMouth from "../../../dist/img/horsemouth.jpg";

export default class home extends Component {
  render() {
    function handleClick(id) {
      id.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    return (
      <>
        <div className="landing-image">
          <NavBar />
          <Container className="header">
            <Header
              as="h1"
              className="header big"
              style={{
                fontSize: "6em ",
                fontWeight: "normal",
                marginBottom: "2em 0em",
                marginTop: "2em 0em",
                display: "inline"
              }}
            >
              <div textAlign="left" className="title">
                Sunfl
                <span id="top">
                  <img
                    src={Sunflower}
                    style={{ paddingTop: "2em 0em", maxHeight: "0.5em" }}
                  />
                </span>
                wer
                <em>
                  <h1 className="small">Stables</h1>
                </em>
              </div>
            </Header>
          </Container>
          <Container style={{ minHeight: "20em" }} />
          <Container textAlign="center">
            <Button
              size="large"
              rounded={true}
              type="button"
              onClick={() => handleClick(about)}
              animated="vertical"
            >
              <Button.Content hidden>About Us</Button.Content>
              <Button.Content visible>
                <Icon name="arrow down" />
              </Button.Content>
            </Button>
          </Container>
        </div>
        <Segment style={{ padding: "4em 0em" }} vertical>
          <Container textAlign="center">
            <Button
              rounded={true}
              type="button"
              onClick={() => handleClick(top)}
              animated="vertical"
            >
              <Button.Content hidden>Top</Button.Content>
              <Button.Content visible>
                <Icon name="arrow up" />
              </Button.Content>
            </Button>
          </Container>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Passion is Everything
                </Header>
                <p id="about" style={{ fontSize: "1.33em" }}>
                  We don't horse around, we take this to the next level.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Boarding, Sales, and Lessons
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We do a little of everything. But showing off our skills at
                  horse shows is what we love most.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered={true}
                  rounded={true}
                  size="large"
                  src={HorseMouth}
                  alt="Horse and Rider"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </>
    );
  }
}
