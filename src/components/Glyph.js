import React from 'react'
import PropTypes from 'prop-types'
import { glyphDictionary, validGlyph } from '../lib/glyph'

const Glyph = ({ value, round, size, hide, highlight, engraved, free, onClick }) => {

  const rootClass = `Glyph
    ${size} ${round ? ' round' : ''}
    ${hide || !validGlyph(value) ? ' hide' : ''}
    ${highlight ? ' highlight' : ''}
    ${engraved ? ' engraved' : ''}
    ${free ? ' free' : ''}
  `

  const handlers = {}
  if (!hide && onClick) {
    handlers.onClick = onClick
  }

  return (
    <div className={rootClass}>
      <div className="Glyph-underlay" />
      <div className="Glyph-content" {...handlers}>
        <span className="hax-text-centered">
          {glyphDictionary[value]}
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
