import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { withRouter } from "react-router";
import BlogAuthor from "../../components/blog/blog-author";
import BlogLike from "../../components/likes/BlogLike";
import "./styles.css";
import CommentSection from "../../components/blog/comments/CommentSection.jsx"
import AddComments from "../../components/blog/addComments/AddComments";
class Blog extends Component {
  state = {
    blog: {},
    loading: true,
  };
 id = this.props.match.params.id

 fetchBlogPost = async () => {
   const response = await fetch(`${process.env.BE_REQS}/posts/${this.id}`)
  const data = await response.json()
  await console.log(data)
  await this.setState({blog: data.findPost, loading: false})
  await console.log("Here is the state",this.state)
 }
  componentDidMount() {
    console.log(this.id)
    this.fetchBlogPost()

    
  }

  render() {
    const { loading, blog } = this.state;
    if (loading) {
      return <div>loading</div>;
    } else {
      return (
        <div className="blog-details-root">
          <Container>
            <Image className="blog-details-cover" src={blog.cover} fluid />
            <h1 className="blog-details-title">{blog.title}</h1>

            <div className="blog-details-container">
              <div className="blog-details-author">
                <BlogAuthor {...blog.author} />
              </div>
              <div className="blog-details-info">
                <div>{blog.createdAt}</div>
                <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div>
                <div style={{marginTop:20}}>
                  <BlogLike defaultLikes={["123"]} onChange={console.log}/>
                </div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          </Container>
          <Container className="mt-4">
            <Row>
              <div>
                <h3>Comments</h3>
              </div>
              <Col>
              <AddComments/>
              </Col>
              <Col md={12} className="pt-5 px-3">
                {console.log("THIS IS BLOG ID", blog.id)}
                  <CommentSection blog_id={blog.id} />
              </Col>

            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default withRouter(Blog);
