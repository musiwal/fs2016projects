import React, { useState } from 'react';
import nbaLogo from '../../assets/nba-logo.png';

const Header = () => {
  const [name, setName]= useState('');
  let handleInputChange=()=>{
    setName("e.value.target")
  }
  return (
    <div>
    <img src={nbaLogo} alt="nbaLegends"/>
    <input
    type='text'
    value={name}
    onChange={handleInputChange}
    placeholder='Search Player ...'
     />
    Header
    </div>
  )
}

export default Header