import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContextProvider';
import CommentList from '../CommentList/CommentList';
import "./DetailsContent.css";

export default function DetailsContent(props) {

    const {asin, category, img, price, title, data} = props;
    const {theme} = useContext(ThemeContext);
    
  return (
    <Row className={`d-flex justify-content-center py-5 ${theme ? "light" : "dark"}`}>
        <Col sm={12} md={4} className={`px-5 pt-3 `} >
            <Image fluid src={img} alt={asin} />
        </Col>
        <Col sm={12} md={8} className='px-4 pt-3'>
          <h5>{title}</h5>
          <p><b>Category: </b>{category}</p>
          <p><b>Price: </b>$ {price}</p>
          <CommentList comments={data} />
        </Col>
      </Row>
  )
}