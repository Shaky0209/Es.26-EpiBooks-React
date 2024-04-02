import React, { useContext, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../../context/ThemeContextProvider.jsx';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputControl from '../InputControl/InputControl.jsx';
import fantasy from '../../Data/fantasy.json';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyNav(props) {
  const {setBooks} = props;
  const {theme, setTheme} = useContext(ThemeContext);
  const [inputSearch, setInputSearch] = useState("");
  const setBackground = theme ? faMoon : faSun;
  const navigate = useNavigate();
  
  const seachFnc = ()=>{
    let result = fantasy.filter((element) => {
      return(element.title.toLowerCase().includes(inputSearch.toLowerCase()))
    });
    setBooks(result);
  }
  
  return (
    <Navbar bg={theme ? "primary" : "dark"} data-bs-theme="dark">
        <Navbar.Brand className='ms-2' href="#">EpiBooks</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={()=> navigate("/")}>Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Brouse</Nav.Link>
        </Nav>
        <Row className='d-flex justify-content-between align-items-center w-100'>
          <Col md={10} className='d-flex justify-content-center'>
            {window.location.pathname === "/" && <InputControl setValue = {setInputSearch} doSearch = {seachFnc} />}
          </Col>
          <Col md={1}>
            <Button
            variant="outline-light" 
            
            style={{width: "40px", height: "40px"}}
            type="button" onClick={()=> setTheme(!theme)}
            >
            <FontAwesomeIcon icon={setBackground} />
            </Button>
          </Col>
        </Row>
    </Navbar>
    
  );
}