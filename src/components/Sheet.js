import React from 'react'
import PropTypes from 'prop-types'

import Attempt from './Attempt'

const Sheet = (props) => {

  const maxAttempts = 10
  const emptyData = {
    code: new Array(4).fill('_'),
    result: null,
  }

  const attempts = [
    {
      code: [1,6,4,5], // array of indices
      result: [2,1,1,0], // array of enums indicating matches
    }, {
      code: [6,4,3,4],
      result: [1,1,0,0],
    }
  ]

  const remaining = new Array(maxAttempts - attempts.length).fill(0)

  return (
    <div className="Sheet">
      {attempts.map((d,i) => (
        <Attempt key={i} data={d} />
      ))}
      {remaining.map((n,i) => (
        <Attempt key={i} data={emptyData} />
      ))}
    </div>
  )
}

export default Sheet
