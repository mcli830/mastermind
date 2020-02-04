import React from "react"
import { connect } from 'react-redux'

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = ({ game, ui }) => (
  <Layout>
    <SEO title="Debug" />
    <div style={{color: '#f0f0f0', padding: '1rem', fontFamily: 'monospace'}}>
      <h2 style={{padding: '1rem 0'}}>Game</h2>
      <ul>
        {Object.entries(game).length > 0 ? Object.entries(game).map(([k,v], i) => (
          <li key={i}>
            {k}: {JSON.stringify(v)}
          </li>
        )) : '-'}
      </ul>
      <hr />
      <h2 style={{padding: '1rem 0'}}>UI</h2>
      <ul>
        {Object.entries(ui).length > 0 ? Object.entries(ui).map(([k,v], i) => (
          <li key={i}>
            {k}: {JSON.stringify(v)}
          </li>
        )) : '-'}
      </ul>
    </div>
  </Layout>
)

const mapState = state => ({
  game: {...state.game},
  ui: {...state.ui}
})

export default connect(mapState)(IndexPage)
