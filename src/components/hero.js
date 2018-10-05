import React from 'react'
import Navigation from './navigation'
import '../styles/hero.css'

const Hero = () => {
  let window
  return (
    <div className="hero">
      <div className="logo" />
      <div className="heading">
        <h1>Tyler Stephen Maschino</h1>
        <h2>
          {window
            ? window.innerWidth > 600
              ? 'Engineer. Inventor. Entrepreneur.'
              : ''
            : ''}
        </h2>
      </div>
      <Navigation type="nav-hero" />
    </div>
  )
}

export default Hero
