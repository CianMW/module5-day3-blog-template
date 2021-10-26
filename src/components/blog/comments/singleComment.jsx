import { Row, Col } from "react-bootstrap"
import React, { Component } from "react";



const SingleComment = ({comment}) => {




    return( 
    <Row>
    <Col sm={3} md={2}>
            {comment.author}
          </Col>
          <Col sm={9} md={10}>
            {comment.text}
          </Col>
    </Row>
    )
}

export default SingleComment

           