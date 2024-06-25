import React from 'react'
import PlayerCard from '../playerCard/PlayerCard'
import {data} from '../../helper/data.js'
import './CardContainer.css'


const CardContainer = () => {
  console.log(data[0].name); // Example console log
  return (
    
    <div className="card-container">
      <PlayerCard legends={data} />
    </div>
    
  );
  
};

export default CardContainer;