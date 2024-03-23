import React from 'react'
import './MyFooter.css'

export default function MyFooter(props) {
  const {theme} = props;
  return (
    <footer className={`${theme ? "bg-primary" : "bg-dark"} d-flex justify-content-center align-items-center`}>
        <h5>Footer</h5>
    </footer>
  )
}
