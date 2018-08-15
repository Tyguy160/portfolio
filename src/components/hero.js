import React from 'react'
import Link from 'gatsby-link'

const Hero = () => (

<div className="hero">
  <div className="logo">
  </div>
  <div className="heading">
    <h1>Tyler Stephen Maschino</h1>
    <h2>{window.innerWidth > 600 ? `Engineer. Inventor. Entrepreneur.` : ``}</h2>
  </div>
  <div className="nav">
    <Link to="about" className="navButton">{"About".toUpperCase()}</Link>
    <div className="navButton">{"Contact".toUpperCase()}</div>
    <a href="/portfolio/"className="navButton">{"Portfolio".toUpperCase()}</a>
    <a href="/blog/"className="navButton">{"Blog".toUpperCase()}</a>
  </div>
</div>
)

export default Hero;