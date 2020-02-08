import React from "react"
import { connect } from 'react-redux'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import GameDisplay from '../components/GameDisplay'
import GameBoard from '../components/GameBoard'
import AllDialogues from '../components/AllDialogues'
import LoadingScreen from '../components/LoadingScreen'
import { openDialogue } from '../state/actions/ui'
import { fetchRandomApi } from '../state/actions/random'

const IndexPage = ({ sequence, fetchPool, playerWin, playerLose, openDialogue }) => {

  // function stabilizer
  const stableFetchPool = React.useCallback(fetchPool, [])

  // fetch initial pool after first load
  React.useEffect(() => {
    console.log('Fetching pool from random.org')
    stableFetchPool()
  }, [stableFetchPool])

  React.useEffect(() => {
    // only do something if win or lose
    if (playerWin) {
      openDialogue(true, 'win')
    } else if (playerLose) {
      openDialogue(true, 'lose')
    }
  }, [playerWin, playerLose])

  console.log({sequence})

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
      <LoadingScreen />

    </Layout>
  )
}

const mapState = state => ({
  sequence: state.game.sequence,
  playerWin: state.game.playerWin,
  playerLose: state.game.playerLose,
})

const mapDispatch = dispatch => ({
  fetchPool: () => dispatch(fetchRandomApi()),
  openDialogue: (open, name) => dispatch(openDialogue(open, name)),
})

export default connect(mapState, mapDispatch)(IndexPage)
