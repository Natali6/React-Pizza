import React from "react";
import "./headerBucket.scss";
import bucket from "../img/bucket.png";

const HeaderBucket = () => {
  return (
    <button>
      520₴ <div className="separator"></div> <img src={bucket} alt="bucket" /> 3
    </button>
  );
};

export default HeaderBucket;
