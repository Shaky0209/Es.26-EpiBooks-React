import { useEffect, useState } from 'react'
import AddComment from '../AddComment/AddComment'
import CommentList from '../CommentList/CommentList'
import { Container } from 'react-bootstrap';
import './CommentArea.css';

export default function CommentArea(props) {
  const { asin, lifting} = props;
  const [data, setData] = useState([]);
  let json;

  useEffect(()=>{
    CommentArea();
  }, [asin]);
  
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
    <Container fluid>
      <AddComment asin={asin} fetchFnc={fetchFnc} />
      <CommentList comments={data} fetchFnc={fetchFnc}/>
    </Container>
  )
}
