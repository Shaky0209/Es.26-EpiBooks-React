import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
   

export default function MyCard(props) {
  const {img, title, price, category} = props;
  return (
    <div className='col-9 col-md-4 col-lg-3 col-xl-2 p-3'>
    <Card style={{height:'100%'}}>
      <Card.Img variant="top" src={img} style={{width: '100%'}} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title>{title}</Card.Title>
        <Card.Text><b>Category: </b>{category}</Card.Text>
        <Card.Text><b>Price: </b>$ {price}</Card.Text>
        <div>
          <Button variant="primary">Click!</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}