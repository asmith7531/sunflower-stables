import React, { Component } from "react";
import NavBar from "../../components/navBar/navBar";
import Horse from "../../components/horseCard/horseCard";
import { Container, Grid, Header } from "semantic-ui-react";
import Sunflower from "../../../dist/7ca8a91d64dbfb901833a07aabfc2adc.png";
export default class horses extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="header">
          <Header
            as="h1"
            className="header"
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginBottom: "2em 0em",
              marginTop: "2em 0em",
              display: "inline"
            }}
            content="Our Horses"
          />
        </Container>
        <Container textAlign="center">
          <br />
          <br />
          <Grid columns={3} textAlign="center">
            <Horse
              name="Bella"
              breed="Thoroughbred"
              description="Bella is fast as fuck!"
            />
            <Horse
              name="Chico"
              breed="I am not sure??"
              description="Pretty sure Meagan sold this one."
            />
            <Horse
              name="Bella"
              breed="Thoroughbred"
              description="Bella is fast as fuck!"
            />
          </Grid>
        </Container>
      </div>
    );
  }
}
