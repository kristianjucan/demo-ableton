import React from 'react'
import image1 from '../Images/photo-1.jpg'
import image2 from '../Images/photo-2.jpg'
import '../Styles/FirstCollage.css'

function FirstCollage() {
  return (
    <div className='first-collage'>
        <div className='images'>
        <img src={image1} alt='about'/>
        <img src={image2} alt='about'/>
        </div>
        <div className='color-box-1'></div>
    </div>
  )
}

export default FirstCollage