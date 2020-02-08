import React from 'react'
import PropTypes from 'prop-types'
import Glyph from './Glyph'

const Bars = ({ perfect, near }) => (
  <span className='result-bar'>
    {Array(4).fill(0).map((n,i) => {
      const type = perfect > i ? 'perfect' : perfect + near > i ? 'near' : null
      return (
        <figure className={`result-tick ${type}`} key={i} />
      )
    })}
  </span>
)

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
        <Bars perfect={result.perfect} near={result.near} />
      </div>
    </div>
  )
}

Record.propTypes = {
  code: PropTypes.arrayOf(PropTypes.number),
  result: PropTypes.object,
}

export default Record
