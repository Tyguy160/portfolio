import React from 'react'
import Link from 'gatsby-link'

import '../styles/contact.css'

const Contact = () => {
  const urls = {
    facebook: 'https://www.facebook.com/Maschino.Tyler',
    twitter: 'https://www.twitter.com/Tyguy160',
    github: 'https://www.github.com/Tyguy160',
    linkedin: 'https://www.linkedin.com/in/tylermaschino',
    email: 'mailto:tylermaschino@gmail.com',
  }
  return (
    <div className="contact">
      <h2>Hit me up.</h2>
      <div className="contactInfo">
        <ul>
          <li>
            <a href={urls.facebook}>Facebook</a>
          </li>
          <li>
            <a href={urls.twitter}>Twitter</a>
          </li>
          <li>
            <a href={urls.github}>GitHub</a>
          </li>
          <li>
            <a href={urls.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a href={urls.email}>Email</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
