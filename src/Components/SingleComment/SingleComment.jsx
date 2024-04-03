import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './SingleComment.css';

export default function SingleComment(props) {
  const {content, remove} = props;
  return (
    <div className='d-flex' data-testid="single-comment">
      {window.location.pathname === "/" &&
      <Button className='delBtn' id={content._id} type='button' onClick={(event)=>{remove(event)}}>
        <FontAwesomeIcon icon={faCircleXmark} className='mb-2 me-2 ms-0' />
      </Button>
      
      }
      <div className='border rounded w-100 m-1'>
        <ul className='mb-0'><li>{content.comment}</li></ul>
        <p className='ms-4 ps-2'>
          <b>Rate: </b>
          {[...Array(content.rate)].map((element, index) => <FontAwesomeIcon className="yellow" icon={faStar} key={index} />)}
        </p>
          
        
      </div>
    </div>
  )
}
