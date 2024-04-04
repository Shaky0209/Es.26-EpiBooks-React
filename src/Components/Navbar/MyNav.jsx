import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../../context/ThemeContextProvider.jsx';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputControl from '../InputControl/InputControl.jsx';
import fantasy from '../../Data/fantasy.json';
import './MyNav.css';

export default function MyNav(props) {

  const {setBooks} = props;
  const {theme, setTheme} = useContext(ThemeContext);
  const [inputSearch, setInputSearch] = useState("");
  const setBackground = theme ? faMoon : faSun;
  const navigate = useNavigate();
  let linkPage = window.location.pathname;

  const searchFnc = ()=>{
      let result = fantasy.filter((element) => {
      return(element.title.toLowerCase().includes(inputSearch.toLowerCase()))
    });
    setBooks(result);
  }

  useEffect(()=>{
    searchFnc();
  }, [inputSearch]);

  return (
    <div className="row ps-2">
    <Navbar expand="lg" bg={theme ? "primary" : "dark"} data-bs-theme="dark" className={`${!(linkPage === "/" || linkPage.includes("/details/")) ? "d-none" : ""} px-4`} >
        <div className='col-3'>
          <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        </div>
        <div className='col-6'>
          {window.location.pathname === "/" && <InputControl setValue = {setInputSearch} searchFnc = {searchFnc} />}
        </div>
        <div className='collapse-btn'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <div className='col-3 pe-5' >
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className='py-3' onClick={()=> navigate("/")}>Home</Nav.Link>
              <Nav.Link className='py-3' href="#">About</Nav.Link>
              <Nav.Link className='py-3' href="#">Brouse</Nav.Link>
              <Nav.Link>
                <Button
                  variant="outline-light" 
                  style={{width: "40px", height: "40px"}}
                  type="button" onClick={()=> setTheme(!theme)}
                  >
                  <FontAwesomeIcon icon={setBackground} />
                </Button>
              </Nav.Link>
            </Nav>            
          </Navbar.Collapse>
        </div>
    </Navbar>
    </div>
  
  );
}