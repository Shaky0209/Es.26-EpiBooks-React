import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function MyAlert() {
  return (
    <>
      {['danger'].map((variant) => (
        <Alert key={variant} variant={variant} className='text-center mt-3 mx-2'>
          This is a {variant} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
        </Alert>
      ))}
    </>
  );
}