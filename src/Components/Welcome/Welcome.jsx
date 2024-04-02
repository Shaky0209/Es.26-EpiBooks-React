import React from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext } from "react";
import './Welcome.css'

export default function Welcome() {

  const {theme} = useContext(ThemeContext);
  const setStyle =`${theme ? "light" : "dark"}`
  
  return (
    <div className= {`d-flex justify-content-center align-items-center ${setStyle}`}>
      <h1>Welcome to the EpiBooks Shop!!!</h1>
    </div>
  );
}
