import React from 'react'
import PropTypes from 'prop-types'

const RecordBar = ({ perfect, near }) => (
  <span className='RecordBar'>
    {Array(4).fill(0).map((n,i) => {
      const type = perfect > i ? 'perfect' : perfect + near > i ? 'near' : null
      return (
        <figure className={`result-tick ${type}`} key={i} />
      )
    })}
  </span>
)

RecordBar.propTypes = {
  perfect: PropTypes.number,
  near: PropTypes.number,
}

RecordBar.propTypes = {
  perfect: 0,
  near: 0,
}

export default RecordBar
