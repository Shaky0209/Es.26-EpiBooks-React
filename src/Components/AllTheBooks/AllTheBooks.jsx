import React from 'react'
import SingleBook from '../SingleBook/SingleBook';

export default function AllTheBooks({books}) {

  return (
    <div className='container-fluid'>
        <div className="row">
            {books.map((element)=>{
              return(
                <SingleBook key={element.asin}
                  book={element}
                  />
                );
            })}
        </div>
    </div>
  );
}
