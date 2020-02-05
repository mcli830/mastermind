import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Glyph from './Glyph'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const GameDisplay = ({ selection, target }) => {

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
            <Glyph value={n} large highlight={(target === i)} />
          </div>
        ))}
        <div className='stage-item'>
          <div className='button is-primary is-outlined'>
            <FA icon="key" />
          </div>
        </div>
      </div>

    </div>
  )
}

const mapState = state => ({
  selection: state.game.selection,
  target: state.game.target,
})

export default connect(mapState)(GameDisplay)
