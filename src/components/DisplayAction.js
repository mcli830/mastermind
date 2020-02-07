import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { submitSequence } from '../state/actions/game'
import { validSelection } from '../lib/glyph'

const DisplayAction = ({ selection, submitSequence }) => {

  const submitHandler = () => submitSequence(selection)
  const isOn = validSelection(selection)

  const keyButtonClass = `key-button ${isOn ? 'on' : ''}`

  return (
    <div className="DisplayAction">
      <div className={keyButtonClass} onClick={isOn ? submitHandler : null}>
        <FA icon="key" />
      </div>
    </div>
  )
}

DisplayAction.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.number),
  submitSequence: PropTypes.func,
}

const mapDispatch = dispatch => ({
  submitSequence: (submission) => dispatch(submitSequence(submission)),
})

export default connect(null, mapDispatch)(DisplayAction)
