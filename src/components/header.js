import React from 'react'
import Link from 'gatsby-link'
import '../layouts/header.css'

const Header = ({ siteTitle }) => (
  <div className="head">
    <div className="contents">
      <h1>
        <Link to="/" className="home-link">
          Tyler Stephen Maschino
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
