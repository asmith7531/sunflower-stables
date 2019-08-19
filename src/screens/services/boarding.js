import React, { Component } from "react";
import { Header, Container, Table } from "semantic-ui-react";
import TableRow from "./boardingTableRow";
export default class boarding extends Component {
  render() {
    return (
      <>
        <Container>
          <Header as="h1">Horse Boarding and Care</Header>
          At Sunflower Stables we believe that animals should be cared for like
          children. We offer various boarding packages for horse people that are
          passionate about equestrian sports but maybe do not have the space for
          a large animal.
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Service</Table.HeaderCell>
                <Table.HeaderCell>Foal</Table.HeaderCell>
                <Table.HeaderCell>Colt</Table.HeaderCell>
                <Table.HeaderCell>Mare</Table.HeaderCell>
                <Table.HeaderCell>Stallion</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <TableRow
                service="Feed and Hay"
                foal="X"
                colt="X"
                mare="X"
                stallion="X"
              />
              <TableRow
                service="Pasture Time"
                foal="X"
                colt="X"
                mare="X"
                stallion="X"
              />
              <TableRow
                service="Exercise"
                foal=""
                colt="X"
                mare="X"
                stallion="X"
              />
              <TableRow
                service="Daily Training"
                foal=""
                colt=""
                mare="X"
                stallion="X"
              />
              <TableRow
                service="Indoor Stable"
                foal=""
                colt=""
                mare=""
                stallion="X"
              />
            </Table.Body>
          </Table>
        </Container>
      </>
    );
  }
}
