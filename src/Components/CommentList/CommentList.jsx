import React from 'react'
import SingleComment from '../SingleComment/SingleComment';

export default function CommentList(props) {
  const {comments} = props;

  return (
    comments.map((comment, index)=>{
      return <SingleComment key={index} content={comment}/>
    })
  )
}