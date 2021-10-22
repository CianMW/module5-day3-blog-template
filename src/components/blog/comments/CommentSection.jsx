import React, { Component } from "react";
import { Col, Row } from "react-bootstrap"


const CommentSection = ({singleComment}) => {

return(
    <>
    {console.log(singleComment)}
    {
     <Row>
        <Col sm={3} md={2}>{singleComment.author}</Col>
        <Col sm={9} md={10}>{singleComment.text}</Col>
    </Row>}
    
    </>
)

}

export default CommentSection