import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Modal from '../components/Modal'
import Dialogue from '../components/Dialogue'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { fetchRandomApi } from '../state/actions/random'
import { openDialogue } from '../state/actions/ui'

const GameOverDialogue = ({ win, count, close, reset }) => (
  <Dialogue icon={<FA icon={win ? 'award' : 'brain'} />} buttons={[
    { text: 'Back to game', func: close },
    { text: (win ? 'New Game' : 'Try Again'), func: reset  }
  ]}>
    <h4 className="glow-text has-text-centered">
      {win ? 'Perfect!' : 'Lockout!'}
    </h4>
    <p className="light-text has-text-centered">
      {win
        ? `You're a mastermind! You hacked the code in ${count} ${count === 1 ? 'attempt' : 'attempts'}.`
        : `The computer has bested you this round and proven itself to be the Mastermind.`
      }
    </p>
  </Dialogue>
)

const AllDialogues = ({
  dialogueIsOpen,
  currentDialogue,
  closeDialogue,
  playerWin,
  playerLose,
  history,
  fetchPool
}) => {

  const resetHandler = () => {
    closeDialogue()
    fetchPool()
  }

  const renderDialogue = () => {
    switch(currentDialogue) {
      case 'win':
      case 'lose':
        return <GameOverDialogue win={playerWin} count={history.length} close={closeDialogue} reset={resetHandler} />
      default:
        return (
          <Dialogue icon={<FA icon="robot" />} buttons={[
            { text: 'Leave', func: closeDialogue },
          ]}>
            <div className="dark-text">Something's not right here...</div>
          </Dialogue>
        )
    }
  }

  return (
    <ReactCSSTransitionGroup
      className="ModalTransitionGroup"
      transitionName="Dialogue"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {dialogueIsOpen && (
        <Modal center onClose={closeDialogue}>
          {renderDialogue()}
        </Modal>
      )}
    </ReactCSSTransitionGroup>
  )
}

const mapState = state => ({
  dialogueIsOpen: state.ui.dialogueIsOpen,
  currentDialogue: state.ui.currentDialogue,
  history: state.game.history,
  playerWin: state.game.playerWin,
  playerLose: state.game.playerLose,
})

const mapDispatch = dispatch => ({
  closeDialogue: () => dispatch(openDialogue(false, null)),
  fetchPool: () => dispatch(fetchRandomApi()),
})

export default connect(mapState, mapDispatch)(AllDialogues)
