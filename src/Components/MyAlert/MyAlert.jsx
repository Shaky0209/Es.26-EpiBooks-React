import React from "react";
import Alert from "react-bootstrap/Alert";
import "./MyAlert.css";

export default function MyAlert(props) {
  const {theme}=props;
  return (
    <div className={`${theme ? "light" : "dark"}  py-3`}>
      {["danger"].map((variant) => (
        <Alert
          key={variant}
          variant={variant}
          className="text-center mx-2"
        >
          This is a {variant} alert with{" "}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.</Alert>
      ))}
    </div>
  );
}
