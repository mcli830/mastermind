/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

// import local files
import '../lib/prototype.js'
import "../styles/app.scss"

// add fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBrain, faBars, faInfoCircle, faQuestion, faCogs, faCog, faKey, faUnlockAlt, faAward, faRobot, faWifi, faPlug } from '@fortawesome/free-solid-svg-icons'
library.add(faBrain, faBars, faInfoCircle, faQuestion, faCogs, faCog, faKey, faUnlockAlt, faAward, faRobot, faWifi, faPlug )

const Layout = ({ children }) => {

  return (
    <>
      <div className="Layout container">
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
