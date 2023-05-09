import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav className='nav'>
        <Link className='logo' to="/"><span className='comp-logo'>
            Afrifo<i className='fas fa-earth-africa'></i>ds
        </span></Link>
    </nav>
  )
}

export default Navbar;