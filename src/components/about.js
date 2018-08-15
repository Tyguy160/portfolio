import React from 'react'
import Link from 'gatsby-link'
import {libary} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => (
  <div className="wrapper">
      <div className="container">
        <div className="portrait">
          <img src="https://www.gravatar.com/avatar/f0b1f249484e7691d1a2ba398e843f48.jpeg?s=450" alt="Avatar"/>
        </div>
        <div className="about-me" id="about-me">
          <h2>About Me</h2>
          <div className="interests">
            <div className="interest">
              <FontAwesomeIcon className="interest-icon" size="2x" icon="pencil-alt" />
              <h3>Engineering</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac dui rutrum, bibendum ante eu, dictum nulla. Fusce tristique urna vel dictum fermentum. Duis sagittis varius varius. Etiam ut accumsan.</p>
            </div>
            <div className="interest">
              <FontAwesomeIcon className="interest-icon" size="2x" icon="coffee" />
              <h3>Coffee</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac dui rutrum, bibendum ante eu, dictum nulla. Fusce tristique urna vel dictum fermentum. Duis sagittis varius varius. Etiam ut accumsan.</p>
            </div>
            <div className="interest">
              <FontAwesomeIcon className="interest-icon" size="2x" icon="book" />
              <h3>Reading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac dui rutrum, bibendum ante eu, dictum nulla. Fusce tristique urna vel dictum fermentum. Duis sagittis varius varius. Etiam ut accumsan.</p>
            </div>
            <div className="interest">
              <FontAwesomeIcon className="interest-icon" size="2x" icon="comment"/>
              <h3>Entrepreneurship</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac dui rutrum, bibendum ante eu, dictum nulla. Fusce tristique urna vel dictum fermentum. Duis sagittis varius varius. Etiam ut accumsan.</p>
            </div>
          </div>
        </div>
    </div>
  </div>
)

export default About;