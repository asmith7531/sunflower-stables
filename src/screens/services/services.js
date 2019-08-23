import React, { Component } from "react";
import Menu from "./servicesMenu";
import Horse from "../../../dist/img/nayyy.jpg";
import { Container, Grid, Header, Image } from "semantic-ui-react";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
export default class services extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Grid textAlign="center">
          <Grid.Row>
            <Grid.Column width={8}>
              <Container className="main">
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
                  Services
                </Header>
                <Container textAlign="center">
                  <Menu />
                </Container>
              </Container>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image
                bordered={true}
                rounded={true}
                size="massive"
                src={Horse}
                alt="Horsey Nose"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </>
    );
  }
}
