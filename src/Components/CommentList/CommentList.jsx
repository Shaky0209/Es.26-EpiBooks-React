import React from 'react'
import SingleComment from '../SingleComment/SingleComment';
import './CommentList.css';

export default function CommentList(props) {
  const {comments, fetchFnc} = props;
  
  const fetchToRemove = async (id)=>{
    try{
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, 
      {
        method: "DELETE",
        headers: {"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlNmQ3NTEzZGYwYTAwMTk0OWYzZmQiLCJpYXQiOjE3MTIyMjE1NTcsImV4cCI6MTcxMzQzMTE1N30.jLSG4m-8EY1F2CNxqejV8vonhsS7u-CDk5M5S-73xF8", "Content-type":"application/json;charset=UTF-8"}
      });
        if(response.ok){
          fetchFnc()
        }else{
          console.log("Fetch DELETE failed!");
        }
    } catch(error){
      console.log(error);
    }
  }

  return (
    <div className="list">
      {comments.map((comment, index)=>{
        return <SingleComment
        key={index}
        content={comment}
        remove={(event)=> {
          console.log(event.target);
          fetchToRemove(event.target.id)
        }}
        />
      })}
    </div>
  )
}