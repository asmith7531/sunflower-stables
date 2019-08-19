import React, { Component } from "react";
import NavBar from "../../components/navBar/navBar";
import Sunflower from "../../../dist/7ca8a91d64dbfb901833a07aabfc2adc.png";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial
} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {
  Segment,
  Form,
  Input,
  Container,
  Button,
  Select,
  TextArea,
  Header,
  Grid,
  Image
} from "semantic-ui-react";
import Horse from "../../../dist/img/nayyy.jpg";
export default class lessons extends Component {
  render() {
    const options = [
      { text: "Cross Country", value: "Cross Country" },
      { text: "Dressage", value: "Dressage" },
      { text: "Hunter Jumper", value: "Hunter Jumper" },
      { text: "Western", value: "Western" },
      { text: "Kids", value: "Kids" },
      { text: "Summer Camp", value: "Summer Camp" }
    ];
    return (
      <div>
        <NavBar />
        <Grid container stackable verticalAlign="middle">
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
                    <AwesomeButton
                      type="primary"
                      action={() => handleClick(top)}
                    >
                      Submit
                    </AwesomeButton>
                  </Form>
                </Segment>
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
      </div>
    );
  }
}
