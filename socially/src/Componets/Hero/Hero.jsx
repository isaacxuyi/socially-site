import React from 'react'
import './Hero.css'
import rightArrow from '../../assets/arrow-right-line.svg'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className='hero-text'>
            <h1>Control all your socials in an instant</h1>
            <p>Our cutting-edge services is designed to empower creators with
                tools that gives easy manipulation, data analization, post manipulation
                live insite, Dynamic work enviroment, that gives creators ability to do
                everthing at ones. 
            </p>
            <button className='btn'>Explore more  <img src={rightArrow} className='right-arrow'/> </button>
        </div>
      
    </div>
  )
}

export default Hero
