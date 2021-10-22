import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
export default class BlogList extends Component {
    state = {
        posts : [],
    }


  fetchData = async () =>{

    const response = await fetch('http://localhost:3001/posts')
     const data = await response.json()
       console.log(data)
     await this.setState({posts : data});
  }
  componentDidMount = () =>{
    this.fetchData()
    console.log(this.state.posts)
  }
  render() {
    return (
      <Row>
        {this.state.posts ? (<>
          {this.state.posts.map((post) => 
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>)}
          </>) : (<></>)  }
      </Row>

          )
      }
  }
