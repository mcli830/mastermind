import React from 'react'
import PropTypes from 'prop-types'

const Spinner = ({large, xlarge}) => {

  const size = xlarge ? 'xlarge' : large ? 'large' : '';

  return (
    <figure className={`Spinner ${size}`}>
      <figure className='Spinner-shape' />
    </figure>
  )
}

Spinner.propTypes = {
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
}

Spinner.defaultProps = {
  large: false,
  xlarge: false,
}

export default Spinner
