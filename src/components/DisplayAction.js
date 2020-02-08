import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { submitSequence } from '../state/actions/game'
import { validSelection } from '../lib/glyph'
import { fetchRandomApi } from '../state/actions/random'

const DisplayAction = ({ playerWin, playerLose, selection, submitSequence, restart }) => {

  const submitHandler = () => submitSequence(selection)
  const isOn = validSelection(selection)

  const keyButtonClass = `key-button ${isOn ? 'on' : ''}`

  const renderButton = () => {
    // show restart button if player win or lose
    if (playerWin || playerLose) {
      return (
        <div className="key-button on" onClick={restart}>
          <FA icon="wifi" />
        </div>
      )
    }
    // otherwise show key for gameplay
    return (
      <div className={keyButtonClass} onClick={isOn ? submitHandler : null}>
        <FA icon="unlock-alt" />
      </div>
    )
  }

  return (
    <div className="DisplayAction">
      {renderButton()}
    </div>
  )
}

DisplayAction.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.number),
  submitSequence: PropTypes.func,
}

const mapState = state => ({
  playerWin: state.game.playerWin,
  playerLose: state.game.playerLose,
})

const mapDispatch = dispatch => ({
  submitSequence: (submission) => dispatch(submitSequence(submission)),
  restart: () => dispatch(fetchRandomApi()),
})

export default connect(mapState, mapDispatch)(DisplayAction)
