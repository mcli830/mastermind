import React from "react"
import { connect } from 'react-redux'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import GameDisplay from '../components/GameDisplay'
import GameBoard from '../components/GameBoard'
import AllDialogues from '../components/AllDialogues'

import { fetchRandomApi } from '../state/actions/random'

const IndexPage = ({ fetchPool, dialogueIsOpen, closeDialogue }) => {

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
      <Header />

      <div className="Index">
        <GameDisplay />
        <div className='Index-gameboard'>
          <GameBoard />
        </div>
      </div>

      <AllDialogues />

    </Layout>
  )
}

const mapDispatch = dispatch => ({
  fetchPool: () => dispatch(fetchRandomApi()),
})

export default connect(null, mapDispatch)(IndexPage)
