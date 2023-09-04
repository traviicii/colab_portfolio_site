import React, { useEffect, useState } from 'react'
import './Main.css'

const API_KEY = process.env.REACT_APP_API_KEY

export default function Inspiration() {

    const [POD, setPOD] = useState('')

    useEffect(() => { getPOD() }, [])

    const getPOD = async () => {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        const data = await res.json()
        if (data.title) {
            setPOD(data)
        }
    }

    return (
        <div id='split'>
            <div id='POD'>
                <h3 >Science and technology have always been huge interests and sources of inspiration in my life. So here you will find NASA's picture of the day accompanied with a full explanation of each image! Every day there is a new featured image of our stunning universe</h3>
                <h1 id='split'>NASA Astronomy Picture Of The Day</h1>
                <h2 id='split'> {POD.title}</h2>
                <img id="nasapic" src={POD.hdurl} alt="NASA Picture Of The Day" />
                <p id="explanation">{POD.explanation}</p>
            </div>

        </div>
    )
}

