import React from 'react'
import image3 from '../Images/photo-3.jpg'
import image4 from '../Images/photo-4.jpg'
import image5 from '../Images/photo-5.jpg'
import '../Styles/SecondCollage.css'

function SecondCollage() {
  return (
    <div className='second-collage'>
        <div className='left-side'>
            <img src={image3} alt='about'/>
            <img src={image4} alt='about'/>
        </div>
        <div className='right-side'>
            <img src={image5} alt='about'/>
        </div>
        <div className='color-box-2'></div>
    </div>
  )
}

export default SecondCollage