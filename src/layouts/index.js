import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt , faCoffee, faBook, faComment} from '@fortawesome/free-solid-svg-icons';

library.add(faPencilAlt, faCoffee, faBook, faComment);

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Tyler Maschino\'s personal website.'},
        { name: 'keywords', content: 'engineer, inventor, entrepreneur, developer, programmer, tyler, stephen, maschino, tyler maschino' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
