import React, { Component } from "react";
import NavBar from "../../components/navBar/navBar";
import Horse from "../../components/horseCard/horseCard";
import Leo from "../../../dist/img/FullSizeRender.jpeg";
import Chico from "../../../dist/img/chico.jpeg";
import Nigel from "../../../dist/img/nigel.jpg";
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
              description="Bella is Meagan's prized race horse. Rescued from an auction, she is now a competitive eventing horse."
            />
            <Horse
              img={Chico}
              name="Chico"
              breed="Grade Quarter Horse"
              description="Chico is a large 14'2 grade quarter horse gelding. He is a proven beginner lesson pony. He has taught many kids various skills from lead line to walk trot, to show jumping. He can go on trail rides, do jumps and lessons, on and off the farm. He is an amazing all around pony at only 4 years old and has the easiest temperment for any level rider."
            />
            <Horse
              img={Leo}
              name="Leo"
              breed="Wait, that's no horse!"
              description="Leo is the latest addition to Sunflower Farms. His favorite food is peanut butter, his biggest pet peeve is the vacuum, and he likes long walks on the beach."
            />
            <Horse
              img={Nigel}
              name="Nigel"
              breed="Registered Quarter Horse"
              description="Nigel is a beautiful quarter horse standing at 14.4 hands. He is 4 years old, so green but very even tempered. An amatuer riders can  easily ride him. He is registered with the AQHA."
            />
          </Grid>
        </Container>
      </div>
    );
  }
}
