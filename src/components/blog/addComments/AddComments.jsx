import React, { Component } from "react";
import { Row, Form, Container, Col, Button } from "react-bootstrap";



class AddComments extends Component {


    state={
        name: "",
        text: ""

    }



    render(){
        return(

            <Container>
                <Row>
                    <Col md={3}>
                    <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="add your name here.." />
                </Form.Group>
                </Form>
                    </Col>
                    <Col md={9}>
                    <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Tell us what you thought:</Form.Label>
                    <Form.Control as="textarea" placeholder="This article was..." />
                    <Form.Text className="text-muted">
                    Tell us your deepest secrets
                    </Form.Text>
                </Form.Group>
                <Button variant="dark">Send</Button>
                </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddComments