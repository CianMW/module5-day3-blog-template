import React, { Component } from "react";
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";

export default class Home extends Component {
  render() {
    return (
      <Container fluid="sm">
        {console.log(process.env.REACT_APP_BE_REQS)}
        <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        <BlogList />
      </Container>
    );
  }
}
