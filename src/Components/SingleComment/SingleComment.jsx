import React from 'react'

export default function SingleComment(props) {
  const {content} = props;
  return (
    <p key={content._id}>{content.comment}</p>
  )
}
