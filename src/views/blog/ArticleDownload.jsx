
import React, { Component } from "react";
import { Button } from "react-bootstrap";

const ArticleDownload = ({id}) => {


const downloadAsPdf = async (e) =>{
        const response = await fetch(`${process.env.REACT_APP_BE_REQS}/pdf/${id}`)
       const data = await response.json()
       await console.log(data)    }



    return(
        <>
         <Button variant="success" onClick={e => downloadAsPdf(e)} >Download as pdf</Button>
        </>
    )
}

export default ArticleDownload