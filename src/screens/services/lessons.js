import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";
export default class lessons extends Component {
  render() {
    return (
      <>
        <Header as="h1">Horseback Riding Lessons</Header>
        Learn equestrian skills from Meagan Smith, the leader behind Sunflower
        Stables. Meagan has spent years working hard competing in hunter jumper
        shows and cross country events. She is passionate about riding. We offer
        beginner and intermediate riding lessons for all age groups. Safety is
        our number one priority.
        <br />
        Sessions include hands on basic care for the horses and equipment and 45
        minutes of riding time. Call for appointments.
        <ul>
          <li>Group Lessons - $25</li>
          <li>Private Lessons - $35</li>
        </ul>
      </>
    );
  }
}
