import React from 'react'
import PropTypes from 'prop-types'
import Glyph from './Glyph'
import RecordBar from './RecordBar'

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
        <RecordBar perfect={result.perfect} near={result.near} />
      </div>
    </div>
  )
}

Record.propTypes = {
  code: PropTypes.arrayOf(PropTypes.number),
  result: PropTypes.object,
}

export default Record
