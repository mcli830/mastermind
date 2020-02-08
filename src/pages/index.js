import React from "react"
import { connect } from 'react-redux'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import GameDisplay from '../components/GameDisplay'
import GameBoard from '../components/GameBoard'

import { fetchRandomApi } from '../state/actions/random'

const IndexPage = ({ fetchPool }) => {

  // function stabilizer
  const stableFetchPool = React.useCallback(fetchPool, [])

  // fetch initial pool after first load
  React.useEffect(() => {
    console.log('Fetching pool from random.org')
    stableFetchPool()
  }, [stableFetchPool])

  return (
    <Layout>
      <SEO title="Home" />
      <div className="Index">
        <GameDisplay />
        <div className='Index-gameboard'>
          <GameBoard />
        </div>
      </div>
    </Layout>
  )
}

const mapDispatch = dispatch => ({
  fetchPool: () => dispatch(fetchRandomApi()),
})

export default connect(null, mapDispatch)(IndexPage)
