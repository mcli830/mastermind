import React from 'react'
import PropTypes from 'prop-types'

const Glyph = ({ value, round, size, hide, highlight, engraved, free, onClick }) => {

  const rootClass = `Glyph
    ${size} ${round ? ' round' : ''}
    ${hide ? ' hide' : ''}
    ${highlight ? ' highlight' : ''}
    ${engraved ? ' engraved' : ''}
    ${free ? ' free' : ''}
  `

  return (
    <div className={rootClass}>
      <div className="Glyph-underlay" />
      <div className="Glyph-content" onClick={onClick}>
        <span className="hax-text-centered">
          {value}
        </span>
      </div>
    </div>
  )
}

Glyph.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.string,
  round: PropTypes.bool,
  highlight: PropTypes.bool,
  engraved: PropTypes.bool,
  free: PropTypes.bool,
}

Glyph.defaultProps = {
  value: '_',
  size: 'sm',
  round: false,
  highlight: false,
  engraved: false,
  free: false,
}

export default Glyph
