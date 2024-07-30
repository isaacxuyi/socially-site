import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {


  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[]);


  const [mobileMenu, SetMobileMenu] = useState(false);
  const Togglemenu = () => {
    mobileMenu ? SetMobileMenu(false) : SetMobileMenu(true)
  }

  return (
    <Router>
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} >
        <img src={logo} alt='' className='logo'/>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu' }>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to="plan" smooth={true} offset={0} duration={500}>Plan</Link></li>
          <li><Link to="about" smooth={true} offset={0} duration={500}>About us</Link></li>
          <li><Link to="OurCreators" smooth={true} offset={0} duration={500}>Our Creators</Link></li>
          <li><Link to="testimonials" smooth={true} offset={0} duration={500}>Testimonial</Link></li>
          <li><Link  to="contact" className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="menu icon" className='menu-icon' onClick={Togglemenu}/>
    </nav>
    </Router>
  )
}

export default Navbar
