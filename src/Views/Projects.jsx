import React from 'react'
import './Main.css'

export default function Projects() {
  return (
    <div className='projects' id='split'>
        <div className='projectblocks'>
            <h3>myGuest</h3>
            <p>
                myGuest is a <b>full stack</b>, fully <b>responsive</b> web application designed for hairstylists. It allows you to keep a detailed custom database of clientelle including contact information and in depth hair color analysis, while also allowing you to create, edit, and delete appointment history witht he option to add photos, notes, and pricing to each appointment entry. Additionally users are able to download their client data into an excel spreadsheet. Future updates will include sending mass text alerts to all or selected clients as well as appointment scheduling and tracking.
            </p>
            <p><b>Technologies used</b>: React, Flask, DaisyUI, Tailwind</p>
        </div>
        <div className='projectblocks'>
            <h3>Poke Battle!</h3>
            <p>

            </p>
        </div>
        <div className='projectblocks'>
            <h3>Traviicii Weather</h3>
        </div>
      </div>
  )
}

