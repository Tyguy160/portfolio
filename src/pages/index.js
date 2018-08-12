import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div id="hero">
      <h1>Tyler Stephen Maschino</h1>
      <h2>Engineer. Inventor. Entrepreneur.</h2>
      <Link to="#about-me" class="navButton">About Me</Link>
      <Link to="#contact"class="navButton">Contact</Link>
      <Link to="/portfolio/"class="navButton">Portfolio</Link>
      <Link to="/blog/"class="navButton">Blog</Link>
    </div>
    <div id="about-me">
      <div>About Me</div>
      <div id="interests">
        <div>Engineering</div>
        <div>Coffee</div>
        <div>Reading</div>
        <div>Entrepreneurship</div>
      </div>
    </div>
    <div id="contact">
      <h2>Hit me up.</h2>
      <div id="contactInfo">
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>Email</li>
      </ul>
      </div>
    </div>
    <div id="contact"></div>
    <div id="footer">I am a footer.</div>
  </div>
)

export default IndexPage
