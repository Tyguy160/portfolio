import React from 'react'
// import {libary} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPencilAlt,
  faCoffee,
  faBook,
  faComment
} from '@fortawesome/free-solid-svg-icons'

library.add(faPencilAlt, faCoffee, faBook, faComment)

const About = () => (
  <div className="wrapper">
    <div className="container">
      <div className="portrait">
        <img
          src="https://www.gravatar.com/avatar/f0b1f249484e7691d1a2ba398e843f48.jpeg?s=450"
          alt="Avatar"
        />
      </div>
      <div className="about" id="about">
        <h2>About Me</h2>
        <div className="interests">
          <div className="interest">
            <div className="interest-header">
              <FontAwesomeIcon
                className="interest-icon"
                size="2x"
                icon="pencil-alt"
              />
              <h3>Engineering</h3>
            </div>
            <p>
              Ever since I was little, I have loved problem solving. I'm
              fascinated by all things electrical and digital; software and
              hardware development are my passion.
            </p>
          </div>
          <div className="interest">
            <div className="interest-header">
              <FontAwesomeIcon
                className="interest-icon"
                size="2x"
                icon="coffee"
              />
              <h3>Coffee</h3>
            </div>
            <p>
              I am a serious coffee enthusiast. After drinking a cappuccino in
              in 2013 in a quaint Austrian cafe, I was hooked. I now have my own
              home espresso bar and coffee roaster.
            </p>
          </div>
          <div className="interest">
            <div className="interest-header">
              <FontAwesomeIcon
                className="interest-icon"
                size="2x"
                icon="book"
              />
              <h3>Reading</h3>
            </div>
            <p>
              I'm a voracious reader. When I'm not reading about engineering,
              I'm listening to audiobooks on Audible. Since 2014, I've listened
              to nearly 80 books.
            </p>
          </div>
          <div className="interest">
            <div className="interest-header">
              <FontAwesomeIcon
                className="interest-icon"
                size="2x"
                icon="comment"
              />
              <h3>Entrepreneurship</h3>
            </div>
            <p>
              I have been involved in entrepreneurship since 2011. Presently,
              I'm working on a content marketing blog that is monetized through
              an affiliate network.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
