import { useEffect, useState } from 'react'
import AddComment from '../AddComment/AddComment'
import CommentList from '../CommentList/CommentList'

export default function CommentArea({asin}) {

  const [data, setData] = useState([]);
  useEffect(()=>{

    const fetchFnc = async()=> {
      try {
        const result = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`)
        const json = await result.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFnc();
  }, [data])
  

  return (
    <>
      <AddComment asin={asin}/>
      <CommentList comments={data}/>
    </>
  )
}
