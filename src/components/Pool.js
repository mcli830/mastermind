import React from 'react'
import PropTypes from 'prop-types'

import Glyph from './Glyph'

const Pool = (props) => {

  const pool = [1,2,3,4,5,6,7,8]

  return (
    <div className="Pool">
      {pool.map((n, i) => (
        <div key={i} className="Pool-item">
          <Glyph value={n} />
        </div>
      ))}
    </div>
  )
}

export default Pool
