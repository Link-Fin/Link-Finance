import React from 'react';
import Luka from '../../Images/Luka.png';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className='background'>
      <div className='aboutUsHeading'>About Us</div>
      <img className="luka" src={Luka} z-index='1' alt="Unable to load"></img>
    </div>
  )
}

export default AboutUs;