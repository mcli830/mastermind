import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import GameBoard from '../components/GameBoard'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className="Index">

      <GameBoard />

    </div>
  </Layout>
)

export default IndexPage
