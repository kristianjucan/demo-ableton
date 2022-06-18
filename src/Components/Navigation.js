import React from 'react'
import useToggle from '../Components/useToggleState';
import { NavLink } from 'react-router-dom';
import blackLogo from '../Images/black-logo.svg'
import '../Styles/Navigation.css'


function Navigation() {
    const [isOpen, setIsOpen] = useToggle(false)  

 const navLinkStyles = ({isActive}) => {
     return {
         color: isActive ? 'rgb(255,118,77)' : 'black',
     }
 }


  return (
    <div className={isOpen? 'navigation-open': 'navigation' }>
        <ul>
            <li><NavLink to='/' style={navLinkStyles}><img src={blackLogo} className={isOpen ? 'white-logo' : ''} /></NavLink></li>
            <div className='large-screen-menu'>
            <li><NavLink to='/' style={navLinkStyles}>About</NavLink></li>
            <li><NavLink to='/jobs' style={navLinkStyles}>Jobs</NavLink></li>
            <li><NavLink to='/apprenticeships' style={navLinkStyles}>Apprenticeships</NavLink></li>
            </div>
        </ul>
        <button onClick={setIsOpen} id={isOpen? 'menu-button-open':'menu-button'}>Menu <i class={isOpen? 'arrow up' : 'arrow down'}></i></button> 
        <div className={isOpen? 'is-open' : 'is-closed'}>
            <nav>
            <ul>
                <li><NavLink to='/'>About</NavLink></li>
                <li><NavLink to='/jobs'>Jobs</NavLink></li>
                <li><NavLink to='/apprenticeships'>Apprenticeships</NavLink></li>
            </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navigation