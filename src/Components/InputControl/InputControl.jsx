import React from 'react';
import {Form} from 'react-bootstrap';
import './InputControl.css';

export default function InputControl({setValue}) {

  return (
      <Form.Group className='form-group d-flex justify-content-center'>
        <Form.Control
        data-testid="form-control"
        id="text-search"
        className='form-control text-center my-3'
        type='text'
        placeholder='Search'
        onChange={(event) => {
          setValue(event.target.value);
        }}
        />
      </Form.Group>
  )
}
