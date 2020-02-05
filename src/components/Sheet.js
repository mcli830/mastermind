import React from 'react'
import PropTypes from 'prop-types'

import Record from './Record'

const Sheet = (props) => {

  const maxRecords = 10
  const emptyData = {
    code: new Array(4).fill('_'),
    result: null,
  }

  const Records = [
    {
      code: [1,6,4,5], // array of indices
      result: [2,1,1,0], // array of enums indicating matches
    }, {
      code: [6,4,3,4],
      result: [1,1,0,0],
    }
  ]

  const remaining = new Array(maxRecords - Records.length).fill(0)

  return (
    <div className="Sheet">
      {Records.map((d,i) => (
        <Record key={i} data={d} />
      ))}
      {remaining.map((n,i) => (
        <Record key={i} data={emptyData} />
      ))}
    </div>
  )
}

export default Sheet
