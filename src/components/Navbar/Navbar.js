import React from 'react'
import './Navbar.css'

// material ui icons
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to='/React-Portfolio/' className='link'>
          <span className='logo'>Sebastian</span>
        </Link>
      </div>
      <div className='right'>
        <Link to='/React-Portfolio/' className='link'>
          <span className='nav-tags'>About Me</span>
        </Link>
        <Link to='/React-Portfolio/work' className='link'>
          <span className='nav-tags'>Work</span>
        </Link>
        <Link to='/React-Portfolio/contact' className='link'>
          <span className='nav-tags'>Contact</span>
        </Link>
        <Link to='/React-Portfolio/resume' className='link'>
          <span className='nav-tags'>Resume</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
