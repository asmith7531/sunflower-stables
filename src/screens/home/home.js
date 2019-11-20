import React, { Component } from "react";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import {
  Container,
  Header,
  Segment,
  Grid,
  Image,
  Button,
  Responsive
} from "semantic-ui-react";
import Sunflower from "../../../dist/img/Asset 1.png";
import HorseMouth from "../../../dist/img/IMG_0350.jpg";
import Competitor from "../../../dist/img/competitor.jpg";
import Chilly from "../../../dist/img/chilly.jpg";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "react-awesome-button/dist/styles.css";
import "./style.css";
export default class home extends Component {
  render() {
    const activeState = this.state;
    console.log(activeState);
    return (
      <>
        <NavBar />
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
              <Button onClick={() => this.parallax.scrollTo(2.05)}>more</Button>
            </ParallaxLayer>
          </ParallaxLayer>
          <Segment style={{ padding: "4em 0em" }} vertical>
            <ParallaxLayer offset={2.0} speed={0.3}>
              <Container textAlign="center" />
              <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header as="h3" className="small">
                      Horse Training
                    </Header>
                    <p id="about" style={{ fontSize: "1.33em" }}>
                      Sunflower Stables can fix bad habits such as kicking,
                      rearing, loading, bucking, catching and biting. We will
                      teach your old horse new tricks as well as start your
                      young horse in whichever discipline you ride, English or
                      Western...
                    </p>
                    <Header as="h3" className="small">
                      Boarding, Sales, and Riding Riding Lessons
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      We do a little of everything: stable and pasture boarding,
                      riding lessons, training, and sales- but showing off our
                      skills in horse shows is what we love most.
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
              <Container textAlign="center" />
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
                      <p style={{ fontSize: "1.33em" }}>
                        English riding is the predominate style of riding at our
                        facility. Hunter Jumper shows and Three Day Eventing are
                        what we specialize in.
                      </p>
                      <Header as="h3" className="small">
                        Competition Breeds Character
                      </Header>
                      <p style={{ fontSize: "1.33em" }}>
                        And even though winning is what we strive towards, we
                        are dedicated to good horsemanship and personal growth
                        above all else. You will leave feeling like you have
                        accomplished something you can be proud of.
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
                    contact form to schedule a time to visit.
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
