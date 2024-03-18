import React from 'react';
import {Form, Button} from 'react-bootstrap';

export default function InputControl({setValue, doSearch}) {



  return (
    <div className='row d-flex justify-content-center'>
      <Form.Group className='col-8 d-flex justify-content-center'>
        <Form.Control
        id="Gigio"
        className='form-control text-center my-3'
        type='text'
        placeholder='Insert your text search'
        onChange={(event) => setValue(event.target.value)}
        >
        </Form.Control>
        <Button className='ms-2 my-3' type='submit' onClick={() => doSearch()}>Search</Button>
      </Form.Group>
    </div>
  )
}
