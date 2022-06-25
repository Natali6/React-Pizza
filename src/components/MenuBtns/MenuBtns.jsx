import { React } from "react";
import "./menuBtns.scss";

const MenuBtn = () => {
  const valueBtn = {
    a: "Всі",
    b: "Мʼясні",
    c: "Вегатеріанська",
    d: "Гриль",
    e: "Гострі",
    f: "Закриті",
  };
  return (
    <div className="menuBtn">
      <button>{valueBtn.a}</button>
      <button>{valueBtn.b}</button>
      <button>{valueBtn.c}</button>
      <button>{valueBtn.d}</button>
      <button>{valueBtn.e}</button>
      <button>{valueBtn.f}</button>
    </div>
  );
};
export default MenuBtn;
