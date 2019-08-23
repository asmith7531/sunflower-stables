import React, { Component } from "react";
import NavBar from "../../components/navBar/navBar";
import Horse from "../../components/horseCard/horseCard";
import Leo from "../../../dist/img/FullSizeRender.jpeg";
import Chico from "../../../dist/img/chico.jpeg";
import Bella from "../../../dist/img/Bella.jpg";
import { Container, Grid, Header } from "semantic-ui-react";
import Sunflower from "../../../dist/img/sunflower.png";
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
          >
            <div>
              Our H
              <span>
                <img
                  src={Sunflower}
                  style={{ paddingTop: "2em 0em", maxHeight: "0.5em" }}
                />
              </span>
              rses
            </div>
          </Header>
        </Container>
        <Container textAlign="center">
          <br />
          <br />
          <Grid columns={3} textAlign="center">
            <Horse
              img={Bella}
              name="Bella"
              breed="Thoroughbred"
              description="Bella is fast as fuck!"
            />
            <Horse
              img={Chico}
              name="Chico"
              breed="I am not sure??"
              description="Pretty sure Meagan sold this one."
            />
            <Horse
              img={Leo}
              name="Leo"
              breed="Wait, that's no horse!"
              description="Leo is the latest addition to Sunflower Farms. His favorite food is peanut butter, his biggest pet peeve is the vacuum, and he likes long walks on the beach."
            />
            <Horse name="Nigel" breed="" description="" />
          </Grid>
        </Container>
      </div>
    );
  }
}
