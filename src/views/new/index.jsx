import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
export default class NewBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      category: "",
      title: "",
      cover: "http://placeimg.com/640/480",
      author: {
        name: "",
      },
      readTime: {
        value: 2,
        unit: "minute",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
    console.log(this.state);
  }
  handleCategory(value) {
    this.setState({ ...this.state, category: value });
    console.log(this.state);
  }
  handleTitle(value) {
    this.setState({ ...this.state, title: value });
    console.log(this.state);
  }
  handleAuthor(value) {
    this.setState({ ...this.state, author: { name: value } });
    console.log(this.state);
  }

  postNewArticle = async (e) => {
    e.preventDefault();
    try {
      const newData = this.state;
      const response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      if (response.ok) {
        console.log(response.json());
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container className="new-blog-container">
        <Form className="mt-5">
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Title"
              value={this.state.title}
              onChange={(e) => this.handleTitle(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              size="lg"
              as="select"
              onChange={(e) => this.handleCategory(e.currentTarget.value)}
            >
              <option>Category1</option>
              <option>Category2</option>
              <option>Category3</option>
              <option>Category4</option>
              <option>Category5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="blog-content" className="mt-3">
            <Form.Label>Blog Content</Form.Label>
            <ReactQuill
              value={this.state.text}
              onChange={this.handleChange}
              className="new-blog-content"
            />
          </Form.Group>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Author Name</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Add the author's name here..."
              value={this.state.author.name}
              onChange={(e) => this.handleAuthor(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
              onClick={(e) => this.postNewArticle(e)}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
