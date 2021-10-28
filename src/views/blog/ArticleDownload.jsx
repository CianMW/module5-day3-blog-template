
import React, { Component } from "react";
import { Button } from "react-bootstrap";

class ArticleDownload extends Component {
    state = {
        id : this.props.id
    }


//  downloadAsPdf = (e) =>{
//     console.log("this is the id!: ", this.state.id)
//     try {
//         const response = await fetch(`${process.env.REACT_APP_BE_REQS}/pdf/${this.state.id}`)
//         if(response){        
//             await console.log(response.json())
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
    render(){ 
        return(
        <>
         <a href={`${process.env.REACT_APP_BE_REQS}/pdf/${this.state.id}` } target="_blank" ><Button variant="success">Download as pdf</Button></a>
        </>
    )}

   
}

export default ArticleDownload