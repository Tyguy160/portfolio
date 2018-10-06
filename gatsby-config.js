module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
      'gatsby-plugin-netlify',
      'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tyler Stephen Maschino',
        short_name: 'TSM',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/tsm_logo.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline'
  ]
}
