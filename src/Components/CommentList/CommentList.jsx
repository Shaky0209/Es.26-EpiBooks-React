import React from 'react'
import SingleComment from '../SingleComment/SingleComment';

export default function CommentList(props) {
  const {comments} = props;

  return (
    comments.map((comment)=>{
      return <SingleComment content={comment}/>
    })
  )
}