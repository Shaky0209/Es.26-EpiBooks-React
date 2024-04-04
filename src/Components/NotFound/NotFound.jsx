import React from 'react';
import { Container, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {

  return (
    <Container className='d-flex flex-column align-items-center'>
      <Image fluid className='img-nf' src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/how-to-fix-error-404-1.png" alt="Error 404 not found" />
      <Card.Text className='not-found'>404 - PAGE NOT FOUND</Card.Text>
      <Link to= "/" >Go to Homepage</Link>
    </Container>
  )
}
