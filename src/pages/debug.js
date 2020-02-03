import React from "react"
import { connect } from 'react-redux'

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = ({ state }) => (
  <Layout>
    <SEO title="Debug" />
    <h1 style={{padding: '1rem 0'}}>Current State</h1>
    <ul>
      {Object.entries(state).map(([k,v], i) => (
        <li key={i}>
          <strong>{k}</strong>: {JSON.stringify(v)}
        </li>
      ))}
    </ul>
  </Layout>
)

const mapState = state => ({
  state: { ...state }
})

export default connect(mapState)(IndexPage)
