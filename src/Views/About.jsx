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
                <h2 id='aboutintro'>Hi, my name is Travis and I'm a software engineer based in NYC. Motivated by ‘tech for good’ and ‘green tech’, my passion is developing useful software and web applications that help improve people's lives.</h2>

                <p>I’m transitioning into the world of software engineering from a successful <b>hairstyling career of 15 years</b>. My experience in the professional beauty industry, as both a <b>master stylist and educator</b>, has provided me with countless skills that are surprisingly transferrable into the tech industry.</p>
                {/* About two years ago I bstarted a bachelor of science degree in chemistry where I ended up taking a computer science course and quickly found a passion I never knew I had. I almost immediately switched my major and haven't regretted it in the slightest bit. I was able to learn python which then opened my eyes to the endless possibilities that learning to write software can bring forth which in turn ignited my passion even further.  */}
                <p>Earlier this year I had an absolute blast completing <b>Coding Temple's Software Engineering</b> course and am excited for the future and what I might be able to accomplish with my newfound skills. I pride myself in <b>writing efficient, readable code</b> and working with others to accomplish even greater goals. </p>

                <p>When I'm not writing code or making people look and feel beautiful you can find me gaming with friends online, biking to the beach, or baking bread (a newfound fascination).</p>
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
                        <a className="headshotlink" href='https://github.com/traviicii'>GitHub</a>
                    </div>
                </div>
                <div style={{ marginTop: "8px" }}>
                    <div className='linkblock'>
                        <img className='linklogo' alt='' src={linkedin} />
                        <a className="headshotlink" href='https://www.linkedin.com/in/travis-peck-b8386837/'>Linkedin</a>
                    </div>
                </div>
                
                    <a id='downloadbutton' href={TRAVIS_PECK_RESUME} download="TRAVIS PECK RESUME">Download CV</a>
                

            </div>

        </div>

    )
}

