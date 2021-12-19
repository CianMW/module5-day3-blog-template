import React, { Component, useState } from "react";
import  { Container, Row, Col, Form, Button  } from "react-bootstrap"

const Login = () => {



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const logIn = async (e) =>{
    e.preventDefault() 

    const data = {
      email: email,
      password: password
    }
    console.log(data)

    const response = await fetch("http://localhost:3100/authors/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if(response.ok) {
      const data = await response.json()
      console.log(data)
    } else(
      console.log("Error! Response: ", response)
    )
   
  }


    return (
      <Container className="mt-5">  
        <Row className="mt-5">
          <Col>
            <h2>Log in</h2>
          </Col>
        </Row>
    {/* input for email */}
        <Row>
          <Col>
            <Form.Group controlId="blog-form" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                size="lg"
                placeholder="Input Email..."
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* //input for password */}
        <Row>
          <Col>
            <Form.Group type="password" controlId="blog-form" className="mt-3">
              <Form.Label>password</Form.Label>
              <Form.Control
                size="lg"
                placeholder="Input Password..."
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button className="bg-dark mt-2" onClick={e => logIn(e)}>Log In</Button>
      </Container>
    );
  }



export default Login