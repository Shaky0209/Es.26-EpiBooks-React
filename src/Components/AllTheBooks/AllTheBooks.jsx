import React from 'react'
import { useState, useContext } from 'react';
import SingleBook from '../SingleBook/SingleBook';
import CommentArea from '../CommentArea/CommentArea';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../../context/ThemeContextProvider';
import './AllTheBooks.css';

export default function AllTheBooks(props) {

  const {books} = props;
  const [selected, setSelected] = useState(null);
  const {theme} = useContext(ThemeContext);

  return (
    <Container fluid className={theme ? "light" : "dark"}>
        <Row className='d-flex justify-content-center pb-5 ps-1'>
          <Col xs={6} lg={9} >
            <Row>
              {books.map((element)=>{
                
                return(
                  <SingleBook key={element.asin}
                    book={element}
                    theme = {theme}
                    asin = {element.asin}
                    selectFnc = {()=> setSelected(element.asin)}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  );
              })}
            </Row>
          </Col>
          <Col xs={6} lg={3}>
            <div className='sticky-top d-flex align-items-center vh-100'>
              {selected ? <CommentArea selected={selected} /> : "Select an object and view comments"}
            </div>
          </Col>
        </Row>
    </Container>
  );
}