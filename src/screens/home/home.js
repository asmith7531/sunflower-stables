import React, { Component } from "react";
import NavBar from "../../components/navBar/navBar";
import { Responsive, Container, Header } from "semantic-ui-react";
import "./style.css";
import Sunflower from "../../../dist/7ca8a91d64dbfb901833a07aabfc2adc.png";
export default class home extends Component {
  render() {
    return (
      <div>
        <Responsive>
          <Container textAlign="center" className="header">
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
                Sunfl
                <span>
                  <img
                    src={Sunflower}
                    style={{ paddingTop: "2em 0em", maxHeight: "1em" }}
                  />
                </span>
                wer Stables
              </div>
            </Header>
          </Container>
        </Responsive>
      </div>
    );
  }
}
