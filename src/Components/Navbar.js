import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Navbar() {

  gsap.registerPlugin(useGSAP);

  const container = useRef()

  useGSAP(
    () => {
      // rise up entrance
      gsap.from('.link1', { duration: 3.3, y: 300, rotation: 260, ease: "elastic", backgroundColor: "black" })
  
      // dangle entrance
      gsap.from('.link2', { duration: 3.7, x: -300, rotation: 90, ease: "elastic" })
  
      // drop in entrance
      gsap.from('.link3', { duration: 1.7, y: -300, rotation: 270, ease: "back" })


      gsap.from('#navbar', { duration: 2.5, opacity: 0, ease: 'power1.inOut'}

      
      , 
      { scope: container })
    })

  return (
    <div className='ptsans' id='navbar' ref={container}>
      <div style={{ display: "flex", justifyContent: "center" }} id='linkBox'>
        <Link to="/about" id='navlinks' className='link1'>About</Link>
        <Link to='/projects' id='navlinks' className='link2'>Projects</Link>
        <Link to='/inspiration' id='navlinks' className='link3'>Inspiration</Link>
      </div>
    </div>


  )}
