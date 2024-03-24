import React, { useState } from 'react'
import SingleBook from '../SingleBook/SingleBook';
import CommentArea from '../CommentArea/CommentArea';
import { Container, Row, Col } from 'react-bootstrap';
import './AllTheBooks.css';

export default function AllTheBooks(props) {

  const {books, theme} = props;
  const [lifting, setLifting] = useState(null);
  const [selected, setSelected] = useState(null);

  const setBorderRed = (asin)=>{
    if(lifting === asin){
      setSelected(asin);
      console.log(`IF = TRUE lifting = ${lifting} element.asin= ${asin} selected= ${selected}`);
    }else{
      setSelected(null);
      console.log(`IF = FALSE lifting = ${lifting} element.asin= ${asin} selected= ${selected}`);
    }
  }

  return (
    <Container fluid className={theme ? "light" : "dark"}>
        <Row className='d-flex justify-content-center'>
          <Col xs={7} md={9} >
            <Row>
              {books.map((element)=>{
                
                return(
                  <SingleBook key={element.asin}
                    book={element}
                    theme = {theme}
                    asin = {element.asin}
                    btnFnc = {()=>{
                      setLifting(element.asin);
                      setBorderRed(element.asin);
                    }}
                    lifting= {lifting}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  );
              })}
            </Row>
          </Col>
          <Col xs={5} md={3}>
            <div className='sticky-top d-flex align-items-center vh-100'>
              {console.log(lifting)}
              {lifting ? <CommentArea asin={lifting} lifting={lifting}/> : "Select an object and view comments"}
            </div>
          </Col>
        </Row>
    </Container>
  );
}
