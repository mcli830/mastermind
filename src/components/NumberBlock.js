import React from 'react'
import PropTypes from 'prop-types'

const NumberBlock = ({value}) => {
  return (
    <div className="NumberBlock box flex-center">
      <div className='title is-1 has-text-centered'>
        {value}
      </div>
    </div>
  )
}

NumberBlock.propTypes = {
  value: PropTypes.string,
}

NumberBlock.defaultProps = {
  value: 'x',
}

export default NumberBlock
