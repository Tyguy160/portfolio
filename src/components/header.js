import React from 'react'
import Link from 'gatsby-link'
import '../styles/header.css'
import Navigation from './navigation'

const Header = ({ siteTitle }) => (
  <div className="head">
    <div className="contents">
      <h1 className="home">
        <Link to="/" className="home-link">
          Tyler Stephen Maschino
        </Link>
      </h1>
      <h1 className="nav">
        <Navigation type="nav-bar" />
      </h1>
    </div>
  </div>
)

export default Header
