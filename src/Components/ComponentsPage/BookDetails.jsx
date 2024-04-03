import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MyFooter from '../MyFooter/MyFooter';
import fantasy from "../../Data/fantasy.json";
import DetailsContent from '../DetailsContent/DetailsContent';
import { ThemeContext } from '../../context/ThemeContextProvider';


export default function BookDetails() {
  const {elementId} = useParams();
  const [data, setData] = useState([]);
  const {theme, setTheme} = useContext(ThemeContext);
  const bookObj = fantasy.filter(element => element.asin === elementId);
  const book = bookObj[0];
  const {asin, category, img, price, title} = book;
  let json;
  

  const commentsFnc = async ()=> {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${elementId}/comments/`)
      json = await response.json();

      setData(json);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    commentsFnc();
  }, []);

  return (
    <>
      <DetailsContent
      asin={asin}
      category={category}
      img={img}
      price={price}
      title={title}
      data={data}
      theme={theme}
      setTheme={setTheme}
      />
      <MyFooter theme={theme} />
    </>
  )
}
