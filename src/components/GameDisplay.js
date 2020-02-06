import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Glyph from './Glyph'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { changeTarget, submitSequence } from '../state/actions/game'

const GameDisplay = ({ selection, target, pool, changeTarget, submitSequence }) => {

  const submitHandler = () => {
    if (selection.every(n => typeof n === 'number')) {
      submitSequence(selection)
    } else {
      alert('You must submit a sequence of 4 glyphs');
    }
  }

  return (
    <div className='GameDisplay'>

      <div className="GameDisplay-content">
        <div className='GameDisplay-top'>
          <div
            className='fill button is-primary has-shadow circle'
            onClick={submitHandler}
            >
            <FA icon="key" />
          </div>
        </div>

        <div className='GameDisplay-bottom'>
          {selection.map((n,i,arr) => (
            <div key={i} className='stage-item'>
              <Glyph
                value={pool[n] ? pool[n].value : null}
                size="lg"
                highlight={(target === i)}
                onClick={() => changeTarget(i)}
                />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

GameDisplay.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.number),
  target: PropTypes.number,
  changeTarget: PropTypes.func,
}

const mapState = state => ({
  selection: state.game.selection,
  target: state.game.target,
  pool: state.game.pool,
})

const mapDispatch = dispatch => ({
  changeTarget: (index) => dispatch(changeTarget(index)),
  submitSequence: (submission) => dispatch(submitSequence(submission)),
})

export default connect(mapState, mapDispatch)(GameDisplay)
