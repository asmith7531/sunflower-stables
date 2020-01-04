import React, { Component } from "react";
import axios from "axios";
import NavBar from "../../components/navBar/navBar";
import Sunflower from "../../../dist/img/sunflower.png";
import Horse from "../../../dist/img/contactus.jpg";
import { AwesomeButton } from "react-awesome-button";
import Footer from "../../components/footer/footer";
import "react-awesome-button/dist/styles.css";
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
import "./style.css";
export default class lessons extends Component {
  resetForm() {
    document.getElementById("contact-form").reset();
  }
  handleSubmit(e) {
    e.preventDefault();
    const firstName = document.getElementById("form-input-control-first-name")
      .value;
    console.log(firstName);
    const lastName = document.getElementById("form-input-control-last-name")
      .value;
    const email = document.getElementById("form-input-control-email").value;
    const lesson = document.getElementById("form-input-control-class").value;
    const comments = document.getElementById("form-input-control-questions")
      .value;
    axios
      .post("http://localhost:3001/api/send", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        interest: lesson,
        message: comments
      })
      .then(response => {
        if (response.data.msg === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.data.msg === "fail") {
          alert("Message failed to send.");
        }
      });
    this.resetForm();
  }
  render() {
    const options = [
      { text: "Boarding", value: "Boarding" },
      { text: "Buying a Horse", value: "Buying a Horse" },
      { text: "Cross Country Lessons", value: "Cross Country" },
      { text: "Hunter Jumper Lessons", value: "Hunter Jumper" },
      { text: "Group Classes", value: "Group Classes" },
      { text: "Summer Camp", value: "Summer Camp" }
    ];
    return (
      <>
        <NavBar />
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Container>
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
                        id="sunflower"
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
                  <Form
                    id="contact-form"
                    onSubmit={this.handleSubmit.bind(this)}
                    // method="POST"
                  >
                    <Form.Group widths="equal">
                      <Form.Field
                        id="form-input-control-first-name"
                        name="firstName"
                        control={Input}
                        label="First name"
                        placeholder="First name"
                      />
                      <Form.Field
                        id="form-input-control-last-name"
                        name="lastName"
                        control={Input}
                        label="Last name"
                        placeholder="Last name"
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        placeholder="@Email"
                        name="email"
                        control={Input}
                        label="Email"
                        id="form-input-control-email"
                      />
                      <Form.Select
                        id="form-input-control-class"
                        name="interest"
                        control={Select}
                        label="What are you interested in?"
                        placeholder="Class"
                        options={options}
                      />
                    </Form.Group>
                    <Form.Field
                      id="form-input-control-questions"
                      name="questions"
                      placeholder="Questions/Comments"
                      control={TextArea}
                      label="Questions/Comments"
                    />
                    <br />
                    <br />
                    <AwesomeButton
                      type="primary"
                      onPress={() => this.handleSubmit}
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
        <Footer />
      </>
    );
  }
}
