import React from 'react'
import './OurCreators.css'
import gallary_1 from '../../assets/gallary-1.jpeg'
import gallary_2 from '../../assets/gallary-2.jpeg'
import gallary_3 from '../../assets/gallary-3.jpeg'
import gallary_4 from '../../assets/gallary-4.jpeg'
import white_arrow from '../../assets/arrow-right-line.svg'

const OurCreators = () => {
  return (
    <div className='OurCreators'>
      <div className='gallary'>
        <img src={gallary_1} alt="" className='glry-pic'/>
        <img src={gallary_2} alt="" className='glry-pic'/>
        <img src={gallary_3} alt="" className='glry-pic'/>
        <img src={gallary_4} alt="" className='glry-pic'/>
      </div>
      <button className='btn'>See more here <img src={white_arrow} alt=""/></button>
    </div>
  )
}

export default OurCreators
