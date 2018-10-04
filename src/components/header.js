import React from 'react'
import Link from 'gatsby-link'
import '../styles/header.css'
import Navigation from './navigation'

const Header = ({ siteTitle }) => (
  <div className="head">
    <div className="contents">
      <h1>
        <Link to="/" className="home-link">
          Tyler Stephen Maschino
        </Link>
        <Navigation type={'nav-bar'} />
      </h1>
    </div>
  </div>
)

export default Header
