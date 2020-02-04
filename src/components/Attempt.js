import React from 'react'
import PropTypes from 'prop-types'

import Glyph from './Glyph'

const Attempt = ({ data }) => {

  return (
    <div className="Attempt">
      <div className="Attempt-code">
        {data.code.map((d, i) => (
          <div key={i} className="code-item">
            <Glyph value={d} round />
          </div>
        ))}
      </div>
      <div className="Attempt-result">
      </div>
    </div>
  )
}

export default Attempt
