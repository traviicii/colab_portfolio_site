import React from 'react'
import './Main.css'
import headshot from "../Images/headshot.jpg"
import github_mark from "../Images/github_mark.png"


export default function About() {
    return (

        <div id='about'>
            <div id='textblock'>
                <h2 id='aboutintro'>My name is Travis and I'm a budding software engineer based in NYC with a passion for developing useful software and web applications that help and improve people's lives.</h2>
                <p>I am deeply motivated by the conepts of "tech for good" and "green tech". I am currently in the process of making a transition from a successful hairstyiling career into the world of tech and software development. My 15 years of experience in the professional hairstyling industry as both a master stylist and educator has given me countless skills and experiences that are surprisingly transferrable into the tech industry.</p>
                {/* About two years ago I bstarted a bachelor of science degree in chemistry where I ended up taking a computer science course and quickly found a passion I never knew I had. I almost immediately switched my major and haven't regretted it in the slightest bit. I was able to learn python which then opened my eyes to the endless possibilities that learning to write software can bring forth which in turn ignited my passion even further.  */}
                <p>Earlier this year I was able to complete Coding Temple's sotfware engineering course and had an absolute blast. I left the program excited for the future and what I might be able to accomplish with my newfound skillsets. My education through Coding Temple has become priceless and I pride myself in writing efficient readable code and working with others to accomplish even greater goals. I simply cannot wait to begin my career as a software engineer!</p>
                <p>When I'm not writing code or making people look and feel beautiful you can find my gaming with friends online, biking to the beach, or baking and cooking delicious food. I've recently become fascinated with bread making and it has become a fantastic and meditative way to relieve stress and the reward is always worth the effort every time and I find this aspect of baking to be very similar to writing code!</p>
            </div>

            <div id='headshotblock'>
                <div>
                    <h1 style={{marginTop: "0px"}}>Travis Peck</h1>
                </div>
                <div>
                    <img alt="" src={headshot} id='headshot' />
                </div>

                <div>
                    <div className='linkblock'>
                        <img className='linklogo' src={github_mark} />
                        <a className="headshotlink" href='https://github.com/traviicii'>GitHub</a>
                    </div>
                </div>

            </div>

        </div>

    )
}

