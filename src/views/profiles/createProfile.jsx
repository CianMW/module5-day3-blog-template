import React, { Component, useState } from "react";
import  { Container, Row, Col, Form, Button  } from "react-bootstrap"

const CreateProfile = () => {



  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");



  const signUp = async (e) =>{
    e.preventDefault() 

    const data = {
      email: email,
      name: name,
      surname: surname,
      password: password
    }
    console.log(data)

    const response = await fetch("http://localhost:3100/authors/register", {
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
        <Row>
          <Col>
            <h2>Sign Up</h2>
          </Col>
        </Row>
    {/* input for name */}
        <Row>
          <Col>
            <Form.Group controlId="blog-form" className="mt-3">
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                size="lg"
                placeholder="Add the author's name here..."
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* //input for Surname */}
        <Row>
          <Col>
            <Form.Group controlId="blog-form" className="mt-3">
              <Form.Label>Author Surname</Form.Label>
              <Form.Control
                size="lg"
                placeholder="Add the author's surname here..."
                value={surname}
                onChange={(e) => setSurname(e.currentTarget.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* //input for email */}
        <Row>
          <Col>
            <Form.Group controlId="blog-form" className="mt-3">
              <Form.Label>Author's Email</Form.Label>
              <Form.Control
                size="lg"
                placeholder="Add the author's email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* //input for password */}
        <Row>
          <Col>
            <Form.Group controlId="blog-form" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                size="lg"
                type="password"
                placeholder="Add the author's email"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* //input for date of birth */}
        <Form>
       
        </Form>

        {/* //Input for avatar image */}
        <Row>
            <Col>
            <Form>
          <Form.Group className="mb-3" controlId="#1">
            <Form.Control
              type="file"
              onChange={(e) => this.target(e)}
              rows={3}
              placeholder="Add your avatar here "
              rows="4"
              cols="81"
            />
          </Form.Group>
        </Form>
            </Col>
        </Row>
        <Row>
          <Col>
          <Button onClick={e => signUp(e)}>Sign up</Button>
          </Col>
            {/* <Col>
          <a href="http://localhost:3050/authors/csv" target="_blank"><Button variant="dark">Download all Authors</Button></a>
            </Col> */}
        </Row>
      </Container>
    );
  }



export default CreateProfile