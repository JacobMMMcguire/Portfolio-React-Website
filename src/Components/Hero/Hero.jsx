import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero'>
        
    <img src={profile_img} alt = ""/>
    <h1><span>console.log("Hello World!")</span></h1>
    <h2>I'm Jacob McGuire, a software developer based in Canada.</h2>
    <p>I am a software developer currently enrolled at Algoma University in the Computer Science program. I also hold a Bachelor's of Science in Psychology from York University and have published research articles in association with thier Undergraduate Research Journal.</p>
    <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
    </div>
    </div>
  )
}

export default Hero