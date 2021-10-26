import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import SingleComment from "./singleComment";

class CommentSection extends Component {
  state = {
    blog_id: this.props.blog_id,
    comments: null,
  };

  fetchComments = async () => {
    const resp = await fetch(`${process.env.BE_REQS}/posts/${this.state.blog_id}/comments`)
    if(resp){
       const commentArray = await resp.json()
        console.log(commentArray)
        this.setState({...this.state, comments: commentArray})
    } else{
        console.log("ERROR FETCHING COMMENTS")
    }
  }


  componentDidMount = () =>{

         this.fetchComments()
  

  }
  render() {
    return (
      <>
        {console.log("this is the blogs id : ", this.state.blog_id)}
        {this.state.comments ? (
            this.state.comments.map(com => <SingleComment comment={com}/>))
        : (<h2>No Comments Yet</h2>)
        }
      </>
    );
  }
}

export default CommentSection;
