import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Container>{`${new Date().getFullYear()} - © Strive School | Developed for homework projects.`}</Container>
        <Link to="/options" >Options</Link>
      </footer>
    );
  }
}
