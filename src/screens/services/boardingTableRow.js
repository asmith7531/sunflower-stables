import React, { Component } from "react";
import { Header, Table } from "semantic-ui-react";
export default class boardingTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: props.service,
      foal: props.foal,
      colt: props.colt,
      mare: props.mare,
      stallion: props.stallion
    };
  }
  render() {
    return (
      <>
        <Table.Row>
          <Table.Cell>{this.state.service}</Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center">
              {this.state.foal}
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center">
              {this.state.colt}
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center">
              {this.state.mare}
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center">
              {this.state.stallion}
            </Header>
          </Table.Cell>
        </Table.Row>
      </>
    );
  }
}
