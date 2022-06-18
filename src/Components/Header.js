import React from 'react'
import header from '../Images/header.jpg'
import '../Styles/header.css'

function Header() {
  return (
    <div className='header'>
        <img src={header} alt='header' />
        <p>Ableton</p>
    </div>
  )
}

export default Header