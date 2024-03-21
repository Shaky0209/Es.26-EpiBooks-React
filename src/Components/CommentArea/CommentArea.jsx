import { useEffect, useState } from 'react'
import AddComment from '../AddComment/AddComment'
import CommentList from '../CommentList/CommentList'

export default function CommentArea({asin}) {
  const [data, setData] = useState([]);
  let json;
  
  const fetchFnc = async ()=> {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`)
      json = await response.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(()=>{
    fetchFnc();
  }, [])

  return (
    <>
      <AddComment asin={asin} fetchFnc={fetchFnc} />
      <CommentList comments={data} fetchFnc={fetchFnc}/>
    </>
  )
}
