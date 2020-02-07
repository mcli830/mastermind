import React from 'react'
import PropTypes from 'prop-types'
import { glyphDictionary, validGlyph } from '../lib/glyph'

const Glyph = ({ value, round, size, hide, highlight, free, onClick, onHold }) => {

  const hasGlyph = validGlyph(value)

  const rootClass = `Glyph ${size} `
    + (hasGlyph ? glyphDictionary[value].color : '')
    + (round ? ' round' : '')
    + (hide || !hasGlyph ? ' hide' : '')
    + (highlight ? ' highlight' : '')
    + (free ? ' free' : '')

  const contextHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (onHold) onHold()
  }

  return (
    <button
      className={rootClass}
      onClick={onClick}
      onContextMenu={contextHandler}
    >
      <div className="Glyph-underlay" />
      <div className="Glyph-content">
        <span className="hax-text-centered">
          {hasGlyph ? glyphDictionary[value].char : null}
        </span>
      </div>
    </button>
  )
}

Glyph.propTypes = {
  index: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.string,
  round: PropTypes.bool,
  highlight: PropTypes.bool,
  free: PropTypes.bool,
  onClick: PropTypes.func,
  onHold: PropTypes.func,
}

Glyph.defaultProps = {
  value: '_',
  size: 'sm',
  round: false,
  highlight: false,
  free: false,
}

export default Glyph
