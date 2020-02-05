import React from 'react'
import PropTypes from 'prop-types'

import Glyph from './Glyph'

const Record = ({ data }) => {

  return (
    <div className="Record">
      <div className="Record-code">
        {data.code.map((d, i) => (
          <div key={i} className="code-item">
            <Glyph value={d} round />
          </div>
        ))}
      </div>
      <div className="Record-result">
      </div>
    </div>
  )
}

export default Record
