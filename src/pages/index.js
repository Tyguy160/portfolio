import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/hero'
import About from '../components/about'
import Contact from '../components/contact'
import '../layouts/hero.css'

const HomePage = () => (
  <div>
    <Hero/>
    <About />
  </div>
)

export default HomePage
