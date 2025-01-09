import React from 'react'
import './Main.css'
import headshot from "../Images/headshot.jpg"
import github_mark from "../Images/github_mark.png"
import linkedin from "../Images/linkedin.png"
// import ReactCanvasConfetti from 'react-canvas-confetti'
import TRAVIS_PECK_RESUME from "../Images/TRAVIS_PECK_RESUME.pdf"


export default function About() {

    return (

        <div id='about'>

            <div id='textblock'>
                <h2 id='aboutintro'>Hi, I’m Travis, a software engineer and educator based in NYC.
                Driven by a passion for ‘tech for good’ and ‘green tech,’ I love creating software and web applications that make a meaningful impact on people’s lives.</h2>

                <p>My journey into tech began after a successful 15-year career as a hairstylist and educator in the professional beauty industry. That experience honed my creativity, communication skills, and ability to adapt—qualities that have proven invaluable in software engineering and teaching.</p>

                <p>Since completing Coding Temple’s Software Engineering course in 2023, I’ve not only continued growing as a developer but also returned to Coding Temple as an educator, where I help the next generation of engineers unlock their potential. As an instructor, I lead classes, mentor students, and contribute to curriculum development. I take pride in my ability to write clean, efficient code and foster collaboration to achieve extraordinary results.</p>

                <p>When I’m not coding or teaching, you can find me gaming with friends online, biking to the beach, or perfecting my latest sourdough recipe.</p>
            </div>

            <div id='headshotblock'>
                <div>
                    <h1 style={{ marginTop: "0px" }}>Travis Peck</h1>
                </div>
                <div>
                    <img alt="" src={headshot} id='headshot' />
                </div>

                <div>
                    <div className='linkblock'>
                        <img className='linklogo' alt='' src={github_mark} />
                        <a className="headshotlink" target="_blank" rel="noreferrer" href='https://github.com/traviicii'>GitHub</a>
                    </div>
                </div>
                <div style={{ marginTop: "8px" }}>
                    <div className='linkblock'>
                        <img className='linklogo' alt='' src={linkedin} />
                        <a className="headshotlink" target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/travis-peck-b8386837/'>Linkedin</a>
                    </div>
                </div>

                <a id='downloadbutton' href={TRAVIS_PECK_RESUME} download="TRAVIS PECK RESUME">Download Resumé</a>
            </div>

        </div>

    )
}

