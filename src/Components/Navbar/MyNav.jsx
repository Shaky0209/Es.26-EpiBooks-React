import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputControl from '../InputControl/InputControl.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from '../../Data/fantasy.json';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

export default function MyNav(props) {
  const {setBooks, theme, setTheme} = props;
  const [inputSearch, setInputSearch] = useState("");
  const setBackground = theme ? faMoon : faSun;

  
  const seachFnc = ()=>{
    let result = fantasy.filter((element) => {
      return(element.title.toLowerCase().includes(inputSearch.toLowerCase()))
    });
    setBooks(result);
  }
  return (
    <Navbar  className="row" bg={theme ? "primary" : "dark"} data-bs-theme="dark">
      <Container className="col-12 mx-0">
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Brouse</Nav.Link>
        </Nav>
        <div className="row col-8 d-flex justify-content-center">
        <InputControl
          setValue = {setInputSearch}
          doSearch = {seachFnc}
        />
        </div>
        <img src="./Icon/sun.jpg" alt="" height={"30px"}/>
        <Button
        variant="outline-light" 
        className="col-1 me-2"
        style={{width: "40px"}}
        type="button" onClick={()=> setTheme(!theme)}
        >
          <FontAwesomeIcon icon={setBackground} />
        </Button>
      </Container>
    </Navbar>
    
  );
}