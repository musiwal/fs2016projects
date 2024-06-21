import React, { useState } from 'react';
import './FlippableCard.css';

const FlippableCard = ({ image, name, options }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
            
          <img src={image} alt={name} />
        </div>
        <div className="flip-card-back">
          <h3>{name}</h3>
          <ul>
            {options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
