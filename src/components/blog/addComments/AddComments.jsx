import React, { Component } from "react";
import { Row, Form, Container, Col, Button } from "react-bootstrap";



class AddComments extends Component {


    state={
        author: "",
        text: "",
        article_id: this.props.blog_id,
    }


    handleAuthor(value) {
        this.setState({ ...this.state, author: value });
        console.log(this.state);
    }

    handleText(value) {
        this.setState({ ...this.state, text: value });
        console.log(this.state);
    }




    postNewComment = async (e) => {
        e.preventDefault();
    
        let commentObject = {...this.state}
        console.log("This is the comment object before fetch : ", commentObject)
        try {
          const response = await fetch(`${process.env.REACT_APP_BE_REQS}/posts/${this.state.article_id}/comments`, {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(commentObject),
          });
          if (response) {
              const resp = response.json()
            await console.log(resp);
            await this.setState({ author: "",
            text: "",
            article_id: this.props.blog_id,})            
    
          }
        } catch (error) {
          console.log(error);
        }
      };




    render(){
        return(

            <Container>
                <Row>
                    <Col md={3}>
                    <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={this.state.author} onChange={e =>this.handleAuthor(e.currentTarget.value)} type="text" placeholder="add your name here.." />
                </Form.Group>
                </Form>
                    </Col>
                    <Col md={9}>
                    <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Tell us what you thought:</Form.Label>
                    <Form.Control value={this.state.text} onChange={e =>this.handleText(e.currentTarget.value)} as="textarea" placeholder="This article was..." />
                    <Form.Text className="text-muted">
                    Tell us your deepest secrets
                    </Form.Text>
                </Form.Group>
                <Button onClick={e => this.postNewComment(e) } variant="dark">Send</Button>
                </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddComments