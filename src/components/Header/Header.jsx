import React from "react";
import Emblem from "../Emblem/Emblem";
import "./header.scss";
import HeaderBucket from "../HeaderBucket/HeaderBucket";

const Header = () => {
  return (
    <div className="header">
      <Emblem />
      <HeaderBucket />
    </div>
  );
};

export default Header;
