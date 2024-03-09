import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyNav() {
  return (
      <Navbar bg="primary" data-bs-theme="dark">
        <Container className="mx-0">
          <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Brouse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}