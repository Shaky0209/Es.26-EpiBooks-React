import React from 'react';
import './SingleComment.css';

export default function SingleComment(props) {
  const {content, remove} = props;
  return (
    <div className='d-flex'>
      <button 
      className='delBtn'
      id={content._id}
      type='button'
      onClick={
        (event)=>{
        remove(event)
        }
      }
      >
        X
      </button>
      <p>{content.comment}</p>
    </div>
  )
}
