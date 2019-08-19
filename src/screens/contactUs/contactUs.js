import React, { Component } from "react";
import axios from "axios";
import NavBar from "../../components/navBar/navBar";
import Sunflower from "../../../dist/7ca8a91d64dbfb901833a07aabfc2adc.png";
import { AwesomeButton } from "react-awesome-button";
import {
  Segment,
  Form,
  Input,
  Container,
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
      { text: "Boarding", value: "Boarding" },
      { text: "Cross Country Lessons", value: "Cross Country" },
      { text: "Dressage Lessons", value: "Dressage" },
      { text: "Hunter Jumper Lessons", value: "Hunter Jumper" },
      { text: "Kids Classes", value: "Kids Classes" },
      { text: "Summer Camp", value: "Summer Camp" },
      { text: "Buying a Horse", value: "Buying a Horse" }
    ];
    function handleSubmit(e) {
      e.preventDefault();
      const firstName = document.getElementById("form-input-control-first-name")
        .value;
      const lastName = document.getElementById("form-input-control-last-name")
        .value;
      const email = document.getElementById("form-input-control-email").value;
      const lesson = document.getElementById("form-input-control-class").value;
      const comments = document.getElementById("form-input-control-comments")
        .value;
      axios({
        method: "POST",
        url: "http://localhost:3000/api/contact-us",
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          interest: lesson,
          messsage: comments
        }
      }).then(response => {
        if (response.data.msg === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.data.msg === "fail") {
          alert("Message failed to send.");
        }
      });
      resetForm();
    }
    function resetForm() {
      document.getElementById("contact-form").reset();
    }
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
                  <Form id="contact-form">
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
                        id="form-input-control-class"
                        control={Select}
                        label="What are you interested in?"
                        placeholder="Class"
                        options={options}
                      />
                    </Form.Group>
                    <Form.Field
                      id="form-input-control-questions"
                      placeholder="Questions/Comments"
                      control={TextArea}
                      label="Questions/Comments"
                    />
                    <br />
                    <br />
                    <AwesomeButton type="submit" action={() => handleSubmit()}>
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
