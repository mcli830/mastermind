import React from 'react'
import PropTypes from 'prop-types'

import Glyph from './Glyph'

const GameDisplay = (props) => {

  const guess = [2,6,4,3]

  return (
    <div className='GameDisplay'>
      <div className='GameDisplay-visuals'></div>
      <div className='GameDisplay-stage'>
        {guess.map((n,i) => (
          <div key={i} className='stage-item'>
            <Glyph value={n} large />
          </div>
        ))}
        <div className='stage-item'>
          <div className='button is-primary is-outlined'>
            Submit
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDisplay
