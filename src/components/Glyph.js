import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { glyphDictionary, validGlyph } from '../lib/glyph'

const Glyph = ({ value, round, size, hide, highlight, free, onClick, onHold, glyphSet, colorsOn }) => {

  const hasGlyph = validGlyph(value)

  const glyphChar = hasGlyph ? glyphDictionary[value][glyphSet] : null
  const glyphColor = hasGlyph && colorsOn ? glyphDictionary[value].color : null

  const rootClass = `Glyph ${size} `
    + glyphColor
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
          {glyphChar}
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

const mapState = state => ({
  colorsOn: state.settings.colorsOn,
  glyphSet: state.settings.glyphSet,
})

export default connect(mapState)(Glyph)
