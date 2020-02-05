import React from 'react'
import PropTypes from 'prop-types'

import Glyph from './Glyph'

const Record = ({ sequence, result }) => {

  return (
    <div className="Record">
      <div className="Record-code">
        {sequence.map((d, i) => (
          <div key={i} className="code-item">
            <Glyph value={d} round free />
          </div>
        ))}
      </div>
      <div className="Record-result">
        {result.map((val, i) => (
          <div
            key={i}
            className={`result-node ${
              val > 1
              ? 'correct-position' : val > 0
              ? 'correct-number' : ''
            }`}
          />
        ))}
      </div>
    </div>
  )
}

Record.propTypes = {
  code: PropTypes.arrayOf(PropTypes.number),
  result: PropTypes.arrayOf(PropTypes.number),
}

export default Record
