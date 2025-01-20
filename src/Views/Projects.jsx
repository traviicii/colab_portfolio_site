import React from 'react'
import './Main.css'
import myGuest from "../static/myGuest.png"
import traviicii_weather from "../static/traviicii_weather.png"
import pokebattle from "../static/pokebattle.png"
import teamup_marketing from "../static/teamup_marketing.png"

export default function Projects() {
    return (
        <div className='projects' id='split'>
            <div id='projectintro'>
                <h3>Here are some of my favorite projects that I've worked on recently. Check them out! I'm always welcoming and appreciative of any kind of feedback, so if you feel inclined to do so I'd love to hear what you think or how they can be improved!</h3>
            </div>

            <div className='projectblocks'>
                <h3>TeamUp</h3>
                <img alt="" src={teamup_marketing} className='projectimages' />
                <div className='innerblock'>
                    <div className='projecttextblock'>
                        <p>
                            This project was the result of an 8 week apprenticeship with <a href="https://www.joincolab.io/" target="_blank" rel="noreferrer" alt="" className='projectlinks'>Co.Lab</a>. Over the course of this apprenticeship I was able to operate as a <b>full stack developer</b> within a cross-funtional team that included a product manager, product designer, and a co-developer, to fully conceptualize, build, and launch a product. We created TeamUp - A collaboration platform for early-career product managers, product designers, and software developers to join or start a product team. Users can gain valuable cross-functional team experience while growing their skills and working on collaborative projects. Check out the links below to find out more!
                        </p>
                        <p><b>Technologies used</b>: React, Flask, PostgreSQL, Redux, Tailwind</p>
                        <p><b>Links</b>: <a href="https://github.com/traviicii/CO.LAB23-backend" target="_blank" rel="noreferrer" alt="" className='projectlinks'>[GitHub - Backend]</a> | <a href="https://github.com/traviicii/colab23-frontend" target="_blank" rel="noreferrer" alt="" className='projectlinks'>[GitHub - Frontend]</a> | <a href="https://goteamup.vercel.app/" target="_blank" rel="noreferrer" alt="" className='projectlinks'>[Product Portfolio]</a> | <a href="https://goteamup.vercel.app/" target="_blank" rel="noreferrer" alt="" className='projectlinks'>[TeamUp]</a></p>
                    </div>
                </div>
            </div>

            <div className='projectblocks'>
                <h3>myGuest</h3>
                <img alt="" src={myGuest} className='projectimages' />
                <div className='innerblock'>
                    <div className='projecttextblock'>
                        <p>
                            myGuest is a <b>full stack</b>, fully <b>responsive</b> web application designed for hairstylists. It allows you to keep a detailed custom database of clientelle including contact information and in depth hair color analysis, while also allowing you to create, edit, view, and delete appointment history with the option to add photos, notes, and pricing to each appointment entry. Additionally users are able to download their client data into an excel spreadsheet. Future updates will include sending mass text alerts to all or selected clients as well as appointment scheduling and tracking.
                        </p>
                        <p><b>Technologies used</b>: React, Flask, PostgreSQL, DaisyUI, Tailwind</p>
                        <p><b>Links</b>: <a href="https://github.com/traviicii/myguest-flask" target="_blank" rel="noreferrer" alt="" className='projectlinks'>[GitHub - Backend]</a> | <a href="https://github.com/traviicii/myguest_react" target="_blank" rel="noreferrer" alt="" className='projectlinks'>[GitHub - Frontend]</a> | <a href="https://myguest.beauty" target="_blank" rel="noreferrer" alt="" className='projectlinks'>[myGuest.beauty]</a></p>
                    </div>
                </div>
            </div>

            <div className='projectblocks'>
                <h3>Traviicii Weather</h3>
                <img alt="" src={traviicii_weather} className='projectimages' />
                <div className='innerblock'>
                    <div className='projecttextblock'>
                        <p>
                            Traviicii Weather is a simple weather app with some creative styling. The background color changes as your mouse moves across the screen and the humidity, cloud coverage, and visibility are displayed with animated speedometer styled readouts. Upon intially loading, the page will display your local weather, as long as you've enabled your location in your browser. You can also search for the weather anywhere globally by entering the city and state/country you wish to know about and the weather information for that location will populate and the speedometers will reanimate with the proper percentages. The application utilizes API calls to the Open Weather API.
                        </p>
                        <p><b>Technologies used</b>: HTML, JavaScript, CSS</p>
                        <p><b>Links</b>: <a href="https://github.com/traviicii/week7-weekend-project-weather-app" target="_blank" rel="noreferrer" alt="" className='projectlinks'>[GitHub]</a> | <a href="https://traviiciiweather.glitch.me/" target="_blank" rel="noreferrer" alt="" className='projectlinks'>[Travicii Weather]</a></p>
                    </div>
                </div>
            </div>

            <div className='projectblocks'>
                <h3>Poké Battle!</h3>
                <img alt="" src={pokebattle} className='projectimages' />
                <div className='innerblock'>
                    <div className='projecttextblock'>
                        <p>
                        Poké Battle! is a <b>full stack</b> web application. It is a Pokemon battle app that allows you to create an account, login, search for pokemon using the custom pokedex, capture Pokemon, create and edit teams and add your Pokemon to them. In the future I will be implementing a full battle system that will allow you to battle other users with the teams you've created. The application utilizes API calls to the PokeAPI database.
                        </p>
                        <p><b>Technologies used</b>: Python, Flask, Jinja, PostgreSQL, CSS</p>
                        <p><b>Links</b>: <a href="https://github.com/traviicii/pokemon-website" target="_blank" rel="noreferrer" alt="" className='projectlinks'>[GitHub]</a> | <a href="https://pokemon-coding-temple-flask-project.onrender.com/" target="_blank" rel="noreferrer" alt="" className='projectlinks'>[Poké Battle!]</a></p>
                    </div>
                </div>
            </div>


        </div>
    )
}

