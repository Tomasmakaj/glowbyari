import React from 'react'
import './Card.css'

import facial from '../../assets/facial.jpeg'
import glow2 from '../../assets/glow2.jpeg'
import glow5 from '../../assets/glow5.jpg'

const Card = () => {
  return (
<div class="card">
  <img src={facial} alt="Avatar" />
  <div class="container">
    <h4>Facials</h4>
    <p>We offer many different facials customized to each client’s specific needs, helping you achieve your ageless, glowing, clear skin.</p>
  </div>
  <img src={glow2} alt="Avatar" />
  <div class="container">
    <h4>MICRODERMABRASION</h4>
    <p>Treatments use a minimally abrasive instrument to gently sand your skin, removing the thicker, uneven outer layer, and has many benefits.</p>
  </div>
  <img src={glow5} alt="Avatar" />
  <div class="container">
    <h4>Eye Lashes</h4>
    <p>Treatments use a minimally abrasive instrument to gently sand your skin, removing the thicker, uneven outer layer, and has many benefits.</p>
  </div>
</div>
  )
}

export default Card