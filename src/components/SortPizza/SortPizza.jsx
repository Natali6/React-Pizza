import React, { useState } from "react";
import "./sortPizza.scss";
import sortTingale from "../img/sortTriangle.png";

const sortItems = [
  { id: 1, name: "популярністю" },
  { id: 2, name: "ціною" },
  { id: 3, name: "алфавітом" },
];

const SortPizza = () => {
  const [isOpened, setIsopened] = useState(false);
  const [activeSort, setActiveSort] = useState(sortItems[0]);

  return (
    <div onClick={() => setIsopened(!isOpened)} className="sortContainer">
      <img src={sortTingale} alt="triangle" />
      <div>
        Сортувати за: <span>{activeSort.name}</span>
        {isOpened && (
          <div className="sortMenu">
            {sortItems.map((item) => (
              <div onClick={() => setActiveSort(item)} key={item.id}>
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortPizza;
