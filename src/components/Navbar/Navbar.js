import React, { useContext, useState } from 'react'
import './Navbar.css'

// material ui icons
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to='/' className='link'>
          <span className='logo'>Sebastian</span>
        </Link>
      </div>
      <div className='right'>
        <Link to='/' className='link'>
          <span className='nav-tags'>About Me</span>
        </Link>
        <Link to='/work' className='link'>
          <span className='nav-tags'>Work</span>
        </Link>
        <Link to='/contact' className='link'>
          <span className='nav-tags'>Contact</span>
        </Link>
        <Link to='/resume' className='link'>
          <span className='nav-tags'>Resume</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
