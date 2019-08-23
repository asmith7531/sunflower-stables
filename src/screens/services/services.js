import React, { Component } from "react";
import Menu from "./servicesMenu";
import Horse from "../../../dist/img/nayyy.jpg";
import { Container, Grid, Header, Image, Responsive } from "semantic-ui-react";
import NavBar from "../../components/navBar/navBar";
import Lessons from "./lessons";
import Board from "./boarding";
import ForSale from "./forsale";
import Footer from "../../components/footer/footer";
export default class services extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Grid textAlign="center">
          <Grid.Row>
            <Grid.Column width={8}>
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
              <Responsive minWidth={1150}>
                <Menu />
              </Responsive>
              <Responsive maxWidth={1150}>
                <Lessons />
                <Board />
                <ForSale />
              </Responsive>
            </Grid.Column>
            <Responsive width={3} minWidth={1150}>
              <Image
                bordered={true}
                rounded={true}
                size="medium"
                src={Horse}
                alt="Horsey Nose"
              />
            </Responsive>
          </Grid.Row>
        </Grid>
        <Footer />
      </>
    );
  }
}
