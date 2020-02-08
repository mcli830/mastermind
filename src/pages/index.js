import React from "react"
import { connect } from 'react-redux'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Header from '../components/Header'
import GameDisplay from '../components/GameDisplay'
import GameBoard from '../components/GameBoard'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Modal from '../components/Modal'
import Dialogue from '../components/Dialogue'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

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
      <Header />

      <div className="Index">
        <GameDisplay />
        <div className='Index-gameboard'>
          <GameBoard />
        </div>
      </div>

      <ReactCSSTransitionGroup
        className="ModalTransitionGroup"
        transitionName="Dialogue"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        <Modal center>
          <Dialogue icon={<FA icon="award" />}>
            <div className="glow-text">Congratulations!</div>
            <div className="light-text">You win!</div>
            <div className="dark-text">but only this time....</div>
          </Dialogue>
        </Modal>
      </ReactCSSTransitionGroup>

    </Layout>
  )
}

const mapDispatch = dispatch => ({
  fetchPool: () => dispatch(fetchRandomApi()),
})

export default connect(null, mapDispatch)(IndexPage)
