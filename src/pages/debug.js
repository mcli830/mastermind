import React from "react"
import { connect } from 'react-redux'

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = ({ state }) => {

  console.log(state)

  return (
    <Layout>
      <SEO title="Debug" />
      <div style={{color: '#f0f0f0', padding: '1rem', fontFamily: 'monospace'}}>
        {Object.entries(state).map(([kk,vv],ii) => (
          <div key={ii}>
            <h2 style={{padding: '1rem 0', textTransform: 'uppercase'}}>{kk}</h2>
            <ul>
              {Object.entries(vv).length > 0 ? Object.entries(vv).map(([k,v], i) => (
                <li key={i} style={{paddingLeft: '1rem'}}>
                  {k}: {JSON.stringify(v)}
                </li>
              )) : '-'}
            </ul>
            <hr />
          </div>
        ))}
      </div>
    </Layout>
  )
}

const mapState = state => ({
  state: {
    game: {...state.game},
    ui: {...state.ui},
    pool: {...state.pool},
    settings: {...state.settings},
  }
})

export default connect(mapState)(IndexPage)
