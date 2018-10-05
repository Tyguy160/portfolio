import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import '../styles/contact.css'

library.add(faEnvelope, fab /* faTwitter, faLinkedIn, faGitHub, faMail */)

const Contact = () => {
  const urls = {
    facebook: 'https://www.facebook.com/Maschino.Tyler',
    twitter: 'https://www.twitter.com/Tyguy160',
    github: 'https://www.github.com/Tyguy160',
    linkedin: 'https://www.linkedin.com/in/tylermaschino',
    email: 'mailto:tylermaschino@gmail.com'
  }
  return (
    <div className="contact">
      <h2>Hit me up.</h2>
      <div className="contact-info">
        <ul>
          <li>
            <a href={urls.facebook}>
              <div
                className="icon-wrapper"
                style={{ backgroundColor: `#1e73be` }}>
                <FontAwesomeIcon
                  className="contact-icon"
                  size="2x"
                  icon={['fab', 'facebook-f']}
                />
              </div>
            </a>
          </li>
          <li>
            <a href={urls.twitter}>
              <div
                className="icon-wrapper"
                style={{ backgroundColor: `#1da1f2` }}>
                <FontAwesomeIcon
                  className="contact-icon"
                  size="2x"
                  icon={['fab', 'twitter']}
                />
              </div>
            </a>
          </li>
          <li>
            <a href={urls.github}>
              <div className="icon-wrapper" style={{ backgroundColor: `#333` }}>
                <FontAwesomeIcon
                  className="contact-icon"
                  size="2x"
                  icon={['fab', 'github']}
                />
              </div>
            </a>
          </li>
          <li>
            <a href={urls.linkedin}>
              <div
                className="icon-wrapper"
                style={{ backgroundColor: `#0077b5` }}>
                <FontAwesomeIcon
                  className="contact-icon"
                  size="2x"
                  icon={['fab', 'linkedin-in']}
                />
              </div>
            </a>
          </li>
          <li>
            <a href={urls.email}>
              <div
                className="icon-wrapper"
                style={{ backgroundColor: `#ea4335` }}>
                <FontAwesomeIcon
                  className="contact-icon"
                  size="2x"
                  icon="envelope"
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
