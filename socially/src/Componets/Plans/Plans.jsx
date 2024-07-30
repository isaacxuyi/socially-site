import React from 'react'
import './Plans.css'
import plan_1 from '../../assets/new-plan-1.jpg'
import plan_2 from '../../assets/new-plan-2.jpg'
import plan_3 from '../../assets/new-plan-3.jpg'
import plan_icon_1 from '../../assets/plans-icon-1.png'
import plan_icon_2 from '../../assets/plans-icon-2.png'
import plan_icon_3 from '../../assets/plans-icon-3.png'

const Plans = () => {
  return (
    <div className='plans'>
      
      <div className='plan'>
        <img src={plan_1} alt="" />
        <div className="caption">
          <img src={plan_icon_1} alt="" />
        <p>Home creator</p></div>
      </div>

      <div className='plan'>
        <img src={plan_2} alt="" />
        <div className="caption">
          <img src={plan_icon_2} alt="" />
        <p>Studio creator</p></div>
      </div>

      <div className='plan'>
        <img src={plan_3} alt="" />
        <div className="caption">
          <img src={plan_icon_3} alt="" />
        <p>Professional creator</p></div>
      </div>

    </div>
  )
}

export default Plans
