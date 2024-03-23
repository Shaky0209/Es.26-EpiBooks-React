import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css'


export default function SingleBook(props) {
  const {book, theme, btnFnc} = props;
  const { img, title, price, category } = book;
  const [selected, setSelected] = useState(false);  
  
  const toggleFnc = () => {
    setSelected(!selected);
  }

  return (
    <div className={`col-10 offset-1 offset-md-0 col-md-4 col-lg-3 p-1 ${theme ? "light" : "dark"}`}>
      <Card 
      style={{ height: '100%' }}
      className ={`${selected ? "border border-4 border-danger" : ""} ${theme ? "light-card" : "dark-card"}`}
      selected={false}      
      >
        <Card.Img variant="top" src={img} style={{ width: '100%' }} />
        <Card.Body className='d-flex flex-column justify-content-between'>
          <Card.Title>{title}</Card.Title>
          <Card.Text><b>Category: </b>{category}</Card.Text>
          <Card.Text><b>Price: </b>$ {price}</Card.Text>
          <div>
            <Button variant="primary">Click!</Button>
            {/* Ho inserito il bottone 'select' in quanto andando a cliccare nel campo di input
            si deselezionava l'oggetto e spariva tutta la sezione CommentArea*/}
            <Button
            variant="success"
            className='ms-2'
            onClick={() => btnFnc()}
            >
              Select
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}