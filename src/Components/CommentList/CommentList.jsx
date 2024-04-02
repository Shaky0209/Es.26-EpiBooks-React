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
        headers: {"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzZjY1NDI0ZjYwNTAwMTkzN2Q1MTgiLCJpYXQiOjE3MTA4MDMyOTQsImV4cCI6MTcxMjAxMjg5NH0.syVCFxwn-N9PI6OwtT3VBLnDoQjtAc1VHeiBmBsk2Zo", "Content-type":"application/json;charset=UTF-8"}
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
        remove={(event)=> fetchToRemove(event.target.id)}
        />
      })}
    </div>
  )
}