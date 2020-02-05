import React from 'react'
import PropTypes from 'prop-types'

const Glyph = ({ value, round, large, hide, highlight, onClick }) => {

  const rootClass = `Glyph ${round ? 'round' : ''} ${large ? 'large' : ''} ${hide ? 'hide' : ''} ${highlight ? 'highlight' : ''}`

  return (
    <div className={rootClass}>
      <div className="Glyph-underlay" />
      <div className="Glyph-content" onClick={onClick}>
        <div className="hax-text-centered">
          {value}
        </div>
      </div>
    </div>
  )
}

Glyph.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  round: PropTypes.bool,
  large: PropTypes.bool,
}

Glyph.defaultProps = {
  value: '_',
  round: false,
  large: false,
}

export default Glyph
