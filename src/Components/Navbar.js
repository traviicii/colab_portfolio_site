import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div id='navbar'>
          <p id='navlinks'>About</p>
          <p id='navlinks'>Projects</p>
          <p id='navlinks'>Inspiration</p>
        </div>
      </div>
    )
  }
}
