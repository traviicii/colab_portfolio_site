import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <div className='ptsans' id='navbar'>
      <div style={{display: "flex", justifyContent: "center"}}>
        {/* <Link to="/" id='navlinks'>Home</Link> */}
        <Link to="/about" id='navlinks'>About</Link>
        <Link to='/projects' id='navlinks'>Projects</Link>
        <Link to='/inspiration' id='navlinks'>Inspiration</Link>
      </div>
    </div>


  )
}

