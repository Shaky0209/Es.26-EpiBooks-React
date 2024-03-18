import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function AddComment({asin}) {
  const [textComment, setTextComment] = useState("");
  console.log(`asin = ${asin}`);

  // useEffect(()=>{
    const sendComment = async (e)=>{
      console.log(textComment);
      let textObj ={
        comment: textComment,
        rate: 1,
        elementId: asin,
      };

      console.log(textObj);
      try{
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`,
          {method: "POST", body: JSON.stringify(textObj),
          headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzZjY1NDI0ZjYwNTAwMTkzN2Q1MTgiLCJpYXQiOjE3MTA3MTA1MjYsImV4cCI6MTcxMTkyMDEyNn0.15LxEDZ-OOe2vjZL8G_kSTgCnn_9ZUawj2uJJ474bd0"}
          }
        )
          if(response.ok){
            console.log("Fetch andata a buon fine.");
          }else{
            console.log("Fetch fallita!");
          }
      } catch(error){
        console.log(error);
      }
    }
    sendComment();
  // })


  return(
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Add your Comment</Form.Label>
        <Form.Control 
        as="textarea" 
        rows={3} 
        placeholder='Add Comment'
        onChange={(event)=> setTextComment(event.target.value)}
      />
      </Form.Group>
      <Button className='mb-3' onClick={()=> sendComment() } >Send</Button>
    </div>
  )
}