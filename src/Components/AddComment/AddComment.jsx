import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function AddComment({asin}) {
  const [textComment, setTextComment] = useState("");

  // useEffect(()=>{
    const sendComment = async ()=>{
      let textObj ={
        comment:{textComment},
        rate: 1,
        elementId:{asin}
      };
      try{
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`,
          {method: "POST", body: JSON.stringify(textObj),
          headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzZjY1NDI0ZjYwNTAwMTkzN2Q1MTgiLCJpYXQiOjE3MTA3MTA1MjYsImV4cCI6MTcxMTkyMDEyNn0.15LxEDZ-OOe2vjZL8G_kSTgCnn_9ZUawj2uJJ474bd0"}
          }
        )
        const json = await response.json();
        console.log(json);

      } catch(error){
        console.log(error);
      }
    }
    sendComment();
  // })


  return(
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Add your Comment</Form.Label>
        <Form.Control 
        as="textarea" 
        rows={3} 
        placeholder='Add Comment'
        textArea={setTextComment}
        />
      </Form.Group>
      <Button className='mb-3' onClick={()=>{sendComment()}} >Send</Button>
    </Form>
  )
}