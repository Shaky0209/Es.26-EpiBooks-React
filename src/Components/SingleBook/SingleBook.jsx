import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faListUl } from '@fortawesome/free-solid-svg-icons';
import './SingleBook.css';

export default function SingleBook(props) {
  const {book, theme, selectFnc, selected, asin} = props;
  const { img, title, price, category } = book;
  const navigate = useNavigate()

  return (
    <div data-testid='book-card' className={`col-10 offset-1 offset-md-0 col-md-4 col-lg-3 p-1 ${theme ? "light" : "dark"}`}>
      <Card 
      style={{ height: '100%' }}
      className ={`${(selected === asin) ? "border border-4 border-danger" : ""} ${theme ? "light-card" : "dark-card"}`}
      >
        <Card.Img variant="top" src={img} style={{ width: '100%' }} />
        <Card.Body className='d-flex flex-column justify-content-between'>
          <Card.Title>{title}</Card.Title>
          <Card.Text><b>Category: </b>{category}</Card.Text>
          <Card.Text><b>Price: </b>$ {price}</Card.Text>
          <div>
            <Button variant="primary" onClick={() => navigate(`/details/${asin}`)} ><FontAwesomeIcon icon={faListUl} /></Button>
            {/* Ho inserito il bottone 'select' in quanto andando a cliccare nel campo di input
            si deselezionava l'oggetto e spariva tutta la sezione CommentArea*/}
            <Button
            variant="success"
            className='ms-2'
            onClick={() => selectFnc()}
            >
              <FontAwesomeIcon icon={faCheck} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}