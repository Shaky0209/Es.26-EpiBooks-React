import React from 'react'
import fantasy from '../../Data/fantasy.json';
import MyCard from '../MyCard/MyCard';

export default function AllTheBooks() {
    
  return (
    <div className='container-fluid'>
        <div className="row">
            {fantasy.map((element)=>{
                return(
                    <MyCard key={element.asin}
                    book={element}
                    img={element.img}
                    category={element.category}
                    title={element.title}
                    price={element.price}
                    />
                );
            })}
        </div>
    </div>
  );
}
