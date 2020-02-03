import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className='container flex-column flex-fluid'>
      <div className='index-display flex-fluid'>
        Display
      </div>
      <div className='index-controls'>
        Controls
      </div>
    </div>
  </Layout>
)

export default IndexPage
