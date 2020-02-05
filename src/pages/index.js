import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import GameDisplay from '../components/GameDisplay'
import ActionMenu from '../components/ActionMenu'
import GameBoard from '../components/GameBoard'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className="Index">
      <div className='Index-gamedisplay'>
        <GameDisplay />
      </div>
      <div className='Index-gameboard'>
        <GameBoard />
      </div>
    </div>
  </Layout>
)

export default IndexPage
