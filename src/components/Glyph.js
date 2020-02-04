import React from 'react'
import PropTypes from 'prop-types'

const Glyph = ({ value, round, large }) => {

  const rootClass = `Glyph ${round ? 'round' : ''} ${large ? 'large' : ''}`

  return (
    <div className={rootClass}>
      <div className="has-text-centered">
        {value}
      </div>
    </div>
  )
}

Glyph.propTypes = {
  value: PropTypes.number,
  round: PropTypes.bool,
  large: PropTypes.bool,
}

Glyph.defaultProps = {
  value: '_',
  round: false,
  large: false,
}

export default Glyph
