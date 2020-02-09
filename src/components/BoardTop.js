import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clearSelection } from '../state/actions/game'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const BoardTop = ({ on, clearSelection }) => {

  return (
    <div className="BoardTop">
      <div className="BoardTop-center">
        <button onClick={on ? clearSelection : null} className={on ? 'on' : null}>
          <FA icon="undo-alt" />
        </button>
      </div>
    </div>
  )
}

const mapState = state => ({
  on: state.game.selection.some(n => n !== null),
})

const mapDispatch = dispatch => ({
  clearSelection: () => dispatch(clearSelection()),
})

export default connect(mapState, mapDispatch)(BoardTop)
