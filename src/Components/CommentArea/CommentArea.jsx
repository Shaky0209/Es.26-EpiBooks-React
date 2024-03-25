import { useEffect, useState } from 'react'
import AddComment from '../AddComment/AddComment'
import CommentList from '../CommentList/CommentList'
import { Container } from 'react-bootstrap';
import './CommentArea.css';

export default function CommentArea(props) {
  const {selected} = props;
  const [data, setData] = useState([]);
  let json;
  
  const fetchFnc = async ()=> {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${selected}/comments/`)
      json = await response.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(()=>{
    fetchFnc();
  }, [selected])

  return (
    <Container fluid>
      <AddComment selected={selected} fetchFnc={fetchFnc} />
      <CommentList comments={data} fetchFnc={fetchFnc}/>
    </Container>
  )
}
