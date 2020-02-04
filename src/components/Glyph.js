import React from 'react'
import PropTypes from 'prop-types'

const Glyph = ({ value, round, small }) => {

  const rootClass = `Glyph ${round ? 'round' : ''} ${small ? 'small' : ''}`

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
  small: PropTypes.bool,
}

Glyph.defaultProps = {
  value: '_',
  round: false,
  small: false,
}

export default Glyph
