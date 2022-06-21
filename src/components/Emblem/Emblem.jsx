import React from "react";
import logo from "../img/logo.png";
import "./emblem.scss";

const Emblem = () => {
  return (
    <div className="emblem">
      <img src={logo} className="logo_img" alt="logo pizza" />
      <div className="title">
        <h2>REACT PIZZA</h2>
        <p>Найважча піца в моєму житті</p>
      </div>
    </div>
  );
};

export default Emblem;
