import React from 'react'
import PropTypes from 'prop-types'

import Glyph from './Glyph'

const Pool = (props) => {

  const pool = [1,2,3,4,5,6,7,8]


  return (
    <div className="Pool">
      <div className='columns is-mobile'>
        {pool.chunk(2).map((g,ia) => (
          <div key={ia} className='Pool-column column'>
            {g.map((n,ib) => (
              <div key={ib} className="Pool-item">
                <Glyph value={n} large />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pool
