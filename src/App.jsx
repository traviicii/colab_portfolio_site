import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Views/Home'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    )
  }
}
