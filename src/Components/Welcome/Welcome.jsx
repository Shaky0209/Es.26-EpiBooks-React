import React from 'react';
import MyAlert from '../MyAlert/MyAlert';
import AllTheBooks from '../AllTheBooks/AllTheBooks';

export default function Welcome() {
  return (
    <>
      <MyAlert />
      <div className='d-flex justify-content-center align-items-center'>
          <h1>Welcome!!!</h1>
      </div>
      <AllTheBooks/>
    </>
  )
}
