import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Sunflower from "../../../dist/img/Asset 1.png";
import HorseMouth from "../../../dist/img/IMG_0350.jpg";
import Competitor from "../../../dist/img/competitor.jpg";
import Chilly from "../../../dist/img/chilly.jpg";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "react-awesome-button/dist/styles.css";
import "./style.css";
import {
  Container,
  Header,
  Segment,
  Grid,
  Image,
  Button,
  Responsive
} from "semantic-ui-react";
export default class home extends Component {
  render() {
    const activeState = this.state;
    console.log(activeState);
    return (
      <>
        <Parallax ref={ref => (this.parallax = ref)} pages={4}>
          <ParallaxLayer
            overflow="hidden"
            offset={0}
            speed={0}
            factor={2}
            className="landing-image"
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ParallaxLayer
              offset={0.0}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "10vh"
              }}
              speed={0.3}
            >
              <Grid
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Grid.Column style={{ justifyContent: "center" }}>
                  <Image style={{ maxHeight: "40vh" }} src={Sunflower} />
                  <br />
                </Grid.Column>
              </Grid>
            </ParallaxLayer>
            <ParallaxLayer
              offset={0.3}
              speed={0.3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Button onClick={() => this.parallax.scrollTo(0.85)}>
                About Us
              </Button>
            </ParallaxLayer>
          </ParallaxLayer>
          <ParallaxLayer offset={1.0} speed={0.3}>
            <Grid container stackable verticalAlign="middle">
              <Segment compact center raised>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header as="h3" id="passionTitle" className="small">
                      Passion Is Why We Ride
                    </Header>
                    <p id="about" style={{ fontSize: "1.25em" }}>
                      Meagan Smith created Sunflower Stables because we love to
                      ride and pursuing the sport as a hobby was just not enough
                      for her. As small family owned stable in rural Reidsville,
                      we strive to deliver an excellent and genuine service in a
                      positive environment to build each other up to be better
                      riders.
                    </p>
                  </Grid.Column>
                  <ParallaxLayer
                    offset={0}
                    speed={0.3}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Button onClick={() => this.parallax.scrollTo(2)}>
                      What We Do
                    </Button>
                  </ParallaxLayer>
                </Grid.Row>
              </Segment>
            </Grid>
          </ParallaxLayer>
          <Segment style={{ padding: "4em 0em" }} vertical>
            <ParallaxLayer offset={2.0} speed={0.3}>
              <Grid container stackable style={{ Padding:"4em 0em" }} verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header as="h3" className="small">
                      Horse Training
                    </Header>
                    <p id="" style={{ fontSize: "1.2 em" }}>
                      At Sunflower Stables our goal is to insure your horse is
                      properly trained and most importantly, provide an
                      environment where they can be happy. We believe that a
                      horse that is comfortable will perform better and take you
                      further as a rider. Every horse trains differently, and it
                      is our job to listen to them and figure out how to get
                      them to perform.
                    </p>
                    <Header as="h3" className="small">
                      Boarding
                    </Header>
                    <p style={{ fontSize: "1.2 em" }}>
                      Our facility includes amenities such as a lighted arena,
                      wash stall with hot water, and well maintained pastures
                      for grazing and horsin' around. Your horse will never be
                      in a pasture that is overcrowded, we keep them ssafely
                      fertilized to maximize growth, and we take care to ensure
                      proper rotation prevents overgrazing. You can find more
                      info <Link to="/services">here</Link>.
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
              </Grid>
            </ParallaxLayer>
          </Segment>
          <Responsive minWidth={1010}>
            <Segment style={{ padding: "4em 0em" }} vertical>
              <ParallaxLayer offset={2.35} speed={0.5}>
                <Grid container stackable verticalAlign="middle">
                  <Grid.Row>
                    <Grid.Column floated="left" width={6}>
                      <Image
                        bordered={true}
                        rounded={true}
                        size="large"
                        src={Competitor}
                        alt="Competitor"
                      />
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Header as="h3" className="small">
                        Riding Lessons
                      </Header>
                      <p style={{ fontSize: "1.2 em" }}>
                        We specialize in advanced hunter jumper and eventing
                        lessons, but we also give beginner western lessons. We
                        have experience teaching all age groups - no one is too
                        young or old. Riders learn how to develop a trusting
                        partnership with their horse while also learning
                        technical riding skills. We welcome trailer ins, or we
                        can fix you up with one of our trusty lesson horses to
                        fit with your riding level.
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row />
                </Grid>
              </ParallaxLayer>
            </Segment>
          </Responsive>
          <ParallaxLayer
            offset={2.6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "10vh"
            }}
            speed={0.3}
          >
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column floated="left" width={6}>
                  <Header as="h3" className="small">
                    Come Visit Us
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    We are located in Reidsville, North Carolina. Fill out our
                    contact form to schedule a time to visit and take a tour of
                    the facilities.
                  </p>
                </Grid.Column>
                <Responsive minWidth={1010}>
                  <Grid.Column width={6}>
                    <Image
                      src={Chilly}
                      bordered={true}
                      rounded={true}
                      size="large"
                    />
                  </Grid.Column>
                </Responsive>
              </Grid.Row>
              <Grid.Row />
            </Grid>
          </ParallaxLayer>
          <ParallaxLayer offset={3.1} speed={0.1}>
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </>
    );
  }
}
