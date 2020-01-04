import React, { Component } from "react";
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
              description="Bella is Meagan's show mare. She competes in eventing and as a thouroughbred she loves to run fast and jump high!"
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
              breed="Registered AQHA Quarter Horse"
              description="Nigel is a beautiful quarter horse standing at 14.2 hands. He is 5 years old, so green but very even tempered. He is very eager to please and easy to work with under saddle and on the ground. He stands well to be mounted, groomed, and saddled. He is easy to catch in the pasture. Contact us for the asking price."
            />
          </Grid>
        </Container>
      </div>
    );
  }
}
