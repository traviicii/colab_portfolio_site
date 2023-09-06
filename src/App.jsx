import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Projects from './Views/Projects'
import Inspiration from './Views/Inspiration'
import About from './Views/About'


export default function App() {

  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/inspiration' element={<Inspiration />}/>
        </Routes>
    </>
  )
}
