import React from "react";
import './Welcome.css'

export default function Welcome(props) {

  const {theme} = props;
  const setStyle =`${theme ? "light" : "dark"}`
  
  return (
    <div className= {`d-flex justify-content-center align-items-center ${setStyle}`}>
      <h1>Welcome!!!</h1>
    </div>
  );
}
