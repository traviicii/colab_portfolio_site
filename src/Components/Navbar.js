import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div id='navbar'>
          <Link to="/about" id='navlinks'>About</Link>
          <Link to='/projects' id='navlinks'>Projects</Link>
          <Link to='/inspiration' id='navlinks'>Inspiration</Link>
        </div>
        
      </div>
    )
  }
}
