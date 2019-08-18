import React, { Component } from "react";
import NavBar from "../../components/navBar/navBar";
import Sunflower from "../../../dist/7ca8a91d64dbfb901833a07aabfc2adc.png";
import {
  Segment,
  Form,
  Input,
  Container,
  Button,
  Select,
  TextArea,
  Header
} from "semantic-ui-react";
export default class lessons extends Component {
  render() {
    const options = [
      { text: "Cross Country", value: "Cross Country" },
      { text: "Dressage", value: "Dressage" },
      { text: "Hunter Jumper", value: "Hunter Jumper" },
      { text: "Western", value: "Western" },
      { text: "Kids", value: "Kids" }
    ];
    return (
      <div>
        <NavBar />
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
            <div>
              C
              <span>
                <img
                  src={Sunflower}
                  style={{ paddingTop: "2em 0em", maxHeight: "0.5em" }}
                />
              </span>
              ntact Us
            </div>
          </Header>
        </Container>
        <Container>
          <Segment raised={true}>
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="First name"
                  placeholder="First name"
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Last name"
                  placeholder="Last name"
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  placeholder="@Email"
                  control={Input}
                  label="Email"
                  id={{ id: "form-input-control-email" }}
                />
                <Form.Select
                  id="type"
                  control={Select}
                  label="What are you interested in?"
                  placeholder="Class"
                  options={options}
                />
              </Form.Group>
              <Form.Field
                placeholder="Questions/Comments"
                control={TextArea}
                label="Questions/Comments"
              />
              <br />
              <br />
              <Form.Field
                id="form-button-control-public"
                control={Button}
                content="Confirm"
              />
            </Form>
          </Segment>
        </Container>
      </div>
    );
  }
}
