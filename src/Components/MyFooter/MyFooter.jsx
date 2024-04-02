import React from 'react'
import './MyFooter.css'
import { ThemeContext } from '../../context/ThemeContextProvider';
import { useContext } from 'react';

export default function MyFooter() {
  const {theme} = useContext(ThemeContext);
  return (
    <footer className={`${theme ? "bg-primary" : "bg-dark"} d-flex justify-content-center align-items-center`}>
        <h5>Footer</h5>
    </footer>
  )
}
