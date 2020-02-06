import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DisplayAction from './DisplayAction'
import Glyph from './Glyph'
import { changeTarget } from '../state/actions/game'

const GameDisplay = ({ selection, target, pool, changeTarget }) => {

  return (
    <div className='GameDisplay'>

      <div className="GameDisplay-content">

        <DisplayAction selection={selection} />

        <div className='GameDisplay-selection'>
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
})

export default connect(mapState, mapDispatch)(GameDisplay)
