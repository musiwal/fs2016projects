import React from 'react';
import { languages } from "../../helper/data";
import './Card.css';

const Card = () => {
    console.log(languages)
  return (
    <div className="image-gallery">
      {languages.map((language, index) => (
        <div key={index} className="image-item">
          <img src={language.img} alt={language.name} />
          {/* <p>{language.description}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Card