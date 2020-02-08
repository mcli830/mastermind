import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Modal from '../components/Modal'
import Dialogue from '../components/Dialogue'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { openDialogue } from '../state/actions/ui'

const AllDialogues = ({ dialogueIsOpen, closeDialogue }) => {

  return (
    <ReactCSSTransitionGroup
      className="ModalTransitionGroup"
      transitionName="Dialogue"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {dialogueIsOpen && (
        <Modal center>
          <Dialogue icon={<FA icon="award" />}>
            <div className="glow-text">Congratulations!</div>
            <div className="light-text">You win!</div>
            <div className="dark-text">but only this time....</div>
          </Dialogue>
        </Modal>
      )}
    </ReactCSSTransitionGroup>
  )
}

const mapState = state => ({
  dialogueIsOpen: state.ui.dialogueIsOpen,
})

const mapDispatch = dispatch => ({
  closeDialogue: () => dispatch(openDialogue(false)),
})

export default connect(mapState, mapDispatch)(AllDialogues)
