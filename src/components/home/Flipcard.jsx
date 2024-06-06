import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Flipcard.css'; // make sure to create this CSS file

const FlipCard = ({ image, style }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick} style={style}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image.src} alt={image.alt || 'Gallery image'} />
        </div>
        <div className="flip-card-back" style={{ backgroundColor: image.color }}>
          <div className="flip-card-content">
            <p>{image.teaser}</p>
            <button className="mehr-button">
              <Link to={image.mehrLink}>Find's heraus!</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
