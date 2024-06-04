// src/FlipCard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Flipcard.css"; // Make sure this file exists

const FlipCard = ({ image, mehrLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // const handleClick = () => {
  //   setIsFlipped(!isFlipped);

  // };

  const handleClick = () => {};

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Link to={image.mehrLink}>
            <img
              src={image.src}
              alt={image.alt || "Image"}
              width={image.width}
              height={image.height}
            />
          </Link>
        </div>
        <div className="flip-card-back">
          <p>{image.text}</p>
          <a href={image.mehrLink}>Mehr</a>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
