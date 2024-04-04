import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function AddComment({selected, fetchFnc}) {

  const [textComment, setTextComment] = useState("");
  const [rateValue, setRateValue] = useState({})

  const sendComment = async (event)=>{
      event.preventDefault();
      let textObj ={
        comment: textComment,
        rate: rateValue,
        elementId: selected,
      };
      
      try{
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, 
        {
          method: "POST",
          body: JSON.stringify(textObj),
          headers: {"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlNmQ3NTEzZGYwYTAwMTk0OWYzZmQiLCJpYXQiOjE3MTIyMjE1NTcsImV4cCI6MTcxMzQzMTE1N30.jLSG4m-8EY1F2CNxqejV8vonhsS7u-CDk5M5S-73xF8", "Content-type":"application/json;charset=UTF-8"}
        });
          if(response.ok){
            fetchFnc()
          }else{
            console.log("Fetch POST failed!");
          }
      } catch(error){
        console.log(error);
      }
    }
    
  return(
    <>
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className='mt-3'>Add your Comment</Form.Label>
          <Form.Control 
          as="textarea" 
          rows={3} 
          placeholder='Add Comment'
          onChange={(event)=> setTextComment(event.target.value)}
          required
        />
        </Form.Group>
        <Form.Label className='my-0'>Enter your rate and send</Form.Label>
        <Form.Group className='d-flex mb-2' onChange={(event)=> setRateValue(event.target.value)}>
          <Form.Check 
          className='d-flex me-2'
          type="radio"
          name="rate"
          value= "1"
          label="1"
          id="1"
          required
          />
          <Form.Check 
          className='d-flex me-2'
          type="radio"
          name="rate"
          value= "2"
          label="2"
          id="2"
          required
          />
          <Form.Check 
          className='d-flex me-2'
          type="radio"
          name="rate"
          value= "3"
          label="3"
          id="3"
          required
          />
          <Form.Check 
          className='d-flex me-2'
          type="radio"
          name="rate"
          value= "4"
          label="4"
          id="4"
          required
          />
          <Form.Check 
          className='d-flex me-2'
          type="radio"
          name="rate"
          value= "5"
          label="5"
          id="5"
          required
          />
        </Form.Group>
        <Button className='mb-3' type="submit">Send</Button>
      </Form>
    </>
  )
}