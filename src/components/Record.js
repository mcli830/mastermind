import React from 'react'
import PropTypes from 'prop-types'

import Glyph from './Glyph'

const Record = ({ data }) => {

  const results = [ 2, 1, 1, 0 ]

  return (
    <div className="Record">
      <div className="Record-code">
        {data.code.map((d, i) => (
          <div key={i} className="code-item">
            <Glyph value={d} round free />
          </div>
        ))}
      </div>
      <div className="Record-result">
        {results.map((val, i) => (
          <div className={`result-node ${val > 1 ? 'correct-position' : val > 0 ? 'correct-number' : ''}`} />
        ))}
      </div>
    </div>
  )
}

export default Record
