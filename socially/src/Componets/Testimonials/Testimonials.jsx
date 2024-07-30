import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/back-arrow.svg'
import back_icon from '../../assets/next-arrow.svg'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

  const slider = useRef()
  let tx = 0;

  const slideForward =  () => {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward =  () => {
    if(tx < -20){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" className='user-profile-picture'/>
                <div>
                  <h3>Stacy Jackson</h3>
                  <span>Writer, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Error fuga neque provident a beatae consequatur eaque hic velit unde quasi, 
                 aliquid amet accusantium itaque cumque sit? 
                 Laudantium sunt voluptatibus magnam.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" className='user-profile-picture'/>
                <div>
                  <h3>Luke Stone</h3>
                  <span>Photographer, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Error fuga neque provident a beatae consequatur eaque hic velit unde quasi, 
                 aliquid amet accusantium itaque cumque sit? 
                 Laudantium sunt voluptatibus magnam.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" className='user-profile-picture'/>
                <div>
                  <h3>Stacy Jackson</h3>
                  <span>Model, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Error fuga neque provident a beatae consequatur eaque hic velit unde quasi, 
                 aliquid amet accusantium itaque cumque sit? 
                 Laudantium sunt voluptatibus magnam.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" className='user-profile-picture'/>
                <div>
                  <h3>Daniel kim  </h3>
                  <span>Podcaster, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Error fuga neque provident a beatae consequatur eaque hic velit unde quasi, 
                 aliquid amet accusantium itaque cumque sit? 
                 Laudantium sunt voluptatibus magnam.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
