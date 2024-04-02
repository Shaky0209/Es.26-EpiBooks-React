import React from "react";
import Alert from "react-bootstrap/Alert";
import { useContext } from "react";
import {ThemeContext} from "../../context/ThemeContextProvider";
import "./MyAlert.css";

export default function MyAlert() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme ? "light" : "dark"}  py-3`}>
      {["danger"].map((variant) => (
        <Alert
          key={variant}
          variant={variant}
          className="text-center mx-2"
        >
          This week there are many items with
          <Alert.Link href="#"> 50% discounts</Alert.Link>
        </Alert>
      ))}
    </div>
  );
}
