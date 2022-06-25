import React from "react";
import "./menu.scss";
import MenuBtn from "../MenuBtns/MenuBtns";
import SortPizza from "../SortPizza/SortPizza";

const Menu = () => {
  return (
    <div className="menu">
      <MenuBtn />
      <SortPizza />
    </div>
  );
};
export default Menu;
