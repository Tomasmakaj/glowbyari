import React from 'react'
import './About.css'

import glowabout from '../../assets/glowabout.svg'


const About = () => {
  return (
    <div className='about'>
        <div className='aboutAri'>
        <img src={glowabout} className='aboutLogo' />
          <p>My name is Arjana and everyone calls me Ari. 
            I love skin care and love to help people feel better under their skin. 
            I went to New York School of Esthetics where I studied and got my license with the state of New York. 
            I am an Albanian who was born in Kosovo, migrated to America for a better life and more opportunity. 
            Being an esthetician is something I’ve been wanting to do and take great pride in. 
            I want to help my clients have better knowledge of products and ingredients that are more affective for their skin type. 
            As well as feeling comfortable and happy with what their skin looks like. 
            I have a favorite quote that I like to use 
            “Taking care of your skin, is more important than covering it up”.  
            </p>
        </div>
    </div>
  )
}

export default About