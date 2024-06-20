import React from 'react';
import { languages } from '../../helper/data';
import FlippabledCard from '../flippableCard/FlippabledCard';
import './Card.css'

const Cards = () => {
  return (
    <div>
        {languages.map((language, index)=>(

       
        <FlippabledCard
        key= {index}
        image={ language.img}
        name={language.name}
        options={language.options}

               
        
        />
    ))}
    </div>
  )
}

export default Cards