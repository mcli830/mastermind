/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from '../components/Header'

// import local files
import '../lib/prototype.js'
import "../styles/app.scss"

// add fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBrain, faBars, faInfoCircle, faQuestion, faCogs, faKey, faArrowAltCircleUp, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
library.add(faBrain, faBars, faInfoCircle, faQuestion, faCogs, faKey, faArrowAltCircleUp, faArrowAltCircleRight)

const Layout = ({ children }) => {

  return (
    <>
      <div className="Layout container">
        <Header />
        <main className="Layout-main">
          {children}
        </main>
        <footer className="Layout-footer" />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
