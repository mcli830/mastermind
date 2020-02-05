import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Glyph from './Glyph'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { changeTarget } from '../state/actions/game'

const GameDisplay = ({ selection, target, changeTarget }) => {

  return (
    <div className='GameDisplay'>

      <div className='GameDisplay-visuals'>
        <figure className="title is-2">
          <FA icon="brain" />
        </figure>
      </div>

      <div className='GameDisplay-stage'>
        {selection.map((n,i) => (
          <div key={i} className='stage-item'>
            <Glyph
              value={n}
              size="lg"
              highlight={(target === i)}
              onClick={() => changeTarget(i)}
            />
          </div>
        ))}
        <div className='stage-item'>
        </div>
      </div>

    </div>
  )
}

const mapState = state => ({
  selection: state.game.selection,
  target: state.game.target,
})

const mapDispatch = dispatch => ({
  changeTarget: (index) => dispatch(changeTarget(index)),
})

export default connect(mapState, mapDispatch)(GameDisplay)
