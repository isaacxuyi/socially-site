import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} className='about-img'/>
            <img src={play_icon} className='play-icon'/>
            </div>
        <div className='about-right'>
        <h3>ABOUT SOCIALLY</h3>
        <h2>Building Todays Creators</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing
        elit. At quae aut deserunt sint provident! Deserunt nisi magni ea quas 
        commodi laborum, quos quam corporis sed, aspernatur voluptatem veritatis 
        voluptatum necessitatibus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Omnis unde beatae voluptate impedit dignissimos nihil necessitatibus voluptas rerum,
        deserunt quam enim ut odio voluptatem facilis cumque error? Ex, voluptatem tenetur?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus vero tempore accusantium odio adipisci reiciendis
        exe porro veritatis? Amet!</p>
        </div>
      
        </div>
  )
}

export default About
