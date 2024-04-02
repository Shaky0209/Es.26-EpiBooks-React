import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './InputControl.css';

export default function InputControl({setValue, doSearch}) {



  return (
      <Form.Group className='col-7 d-flex justify-content-center'>
        <Form.Control
        data-testid="form-control"
        id="text-search"
        className='form-control text-center my-3'
        type='text'
        placeholder='Insert your text search'
        onChange={(event) => setValue(event.target.value)}
        >
        </Form.Control>
        <Button 
        variant="outline-light"
        className='ms-2 my-3'
        type='submit'
        onClick={() => doSearch()}
        >
          Search
        </Button>
      </Form.Group>
  )
}
