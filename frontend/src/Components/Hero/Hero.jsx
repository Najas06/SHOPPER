import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_imae from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>NEW</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>COLLECTIONS</p>
            <p>For Everyone</p>
        </div>
        <div className="hero-lastest-btn">
            <div>Lastest COLLECTION</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_imae} alt="" />
      </div>
    </div>
  )
}

export default Hero
