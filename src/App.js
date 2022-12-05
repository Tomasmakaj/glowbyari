import React from 'react'
import About from './components/about/About'
import Card from './components/card/Card'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'


const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Card />
      </div>
  )
}

export default App