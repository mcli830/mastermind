import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { submitSequence } from '../state/actions/game'

const DisplayAction = ({ selection, submitSequence }) => {

  const submitHandler = () => {
    if (selection.every(n => typeof n === 'number')) {
      submitSequence(selection)
    } else {
      alert('You must submit a sequence of 4 glyphs');
    }
  }

  return (
    <div className="DisplayAction">
      <div
        className='fill button is-primary has-shadow circle'
        onClick={submitHandler}
      >
        <FA icon="key" />
      </div>
    </div>
  )
}

DisplayAction.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.number),
  submitSequence: PropTypes.func,
}

const mapState = state => ({
  selection: state.game.selection,
})

const mapDispatch = dispatch => ({
  submitSequence: (submission) => dispatch(submitSequence(submission)),
})

export default connect(mapDispatch)(DisplayAction)
