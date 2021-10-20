import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";
export default class BlogList extends Component {


  fetchData = async () =>{

    fetch('http://localhost:3001/posts')
    .then(response => response.json())
    .then(data => console.log("HERE ARE THE POSTS", data));
  }
  componentDidMount = () =>{
    this.fetchData()
  }
  render() {
    return (
      <Row>
        {posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
