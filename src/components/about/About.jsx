import React from 'react'
import './About.css'

import glowabout from '../../assets/glowabout.svg'


const About = () => {
  return (
    <div className='about'>
        <div>
        <img src={glowabout} className='aboutLogo' />
        </div>
        <p></p>
    </div>
  )
}

export default About