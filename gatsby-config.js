var globImporter = require('node-sass-glob-importer')

module.exports = {
  siteMetadata: {
    title: `Mastermind`,
    description: `Decipher a randomly generated sequence of glyphs.`,
    author: `@mcli830`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: './src/state/createStore',
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        importer: globImporter(),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mastermind`,
        short_name: `Mastermind`,
        start_url: `/`,
        background_color: `#222`,
        theme_color: `#26C485`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/logo.png',
        background: '#222',
        theme_color: '#26C485',
        display: 'standalone',
        orientation: 'portrait',
        icons: {
          android: true,
          appleIcon: true,
          favicons: true,
          firefox: true,
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
