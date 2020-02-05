import React from 'react'
import PropTypes from 'prop-types'

const Glyph = ({ value, round, size, hide, highlight, onClick }) => {

  const rootClass = `Glyph ${size} ${round ? 'round' : ''} ${hide ? 'hide' : ''} ${highlight ? 'highlight' : ''}`

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
  size: PropTypes.string,
  round: PropTypes.bool,
}

Glyph.defaultProps = {
  value: '_',
  size: 'sm',
  round: false,
}

export default Glyph
