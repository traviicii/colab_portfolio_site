import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Views/Home'
import Projects from './Views/Projects'
import Inspiration from './Views/Inspiration'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/inspiration' element={<Inspiration />}/>
        </Routes>
      </div>
    )
  }
}
