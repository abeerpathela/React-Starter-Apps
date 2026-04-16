import React from "react";
import { useState } from "react";
import "./card.css";

function Card({ id, name, info, image, price, removeTour }) {
  const [readmore, setReadMore] = useState(false);
  function readmoreHandler() {
    setReadMore(!readmore);
  }
  const description = readmore ? info : `${info.substring(0, 200)}`;
  return (
    <div className="main-card">
      <img src={image}></img>
      <div className="main-card-tourDetails">
        <h4 className="main-card-price">₹{price}</h4>
        <h4 className="main-card-placeName">{name}</h4>
      </div>
      <div className="tourDescription">
        {description}
        <span className="readMore-Wala-button" onClick={readmoreHandler}>
          {readmore ? ` show less` : `....Read More`}
        </span>
      </div>
      <button className="red-button" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
