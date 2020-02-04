/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from '../components/Header'

import '../lib/prototype.js'

import "../styles/app.scss"

const Layout = ({ children }) => {

  return (
    <>
      <div className="Layout container is-tablet">
        <Header />
        <main className="Layout-main">
          {children}
        </main>
        <footer className="Layout-footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
