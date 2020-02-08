import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { glyphDictionary, validGlyph } from '../lib/glyph'

const Glyph = ({ value, round, size, hide, highlight, free, onClick, onHold, glyphsOn, colorsOn }) => {

  const hasGlyph = validGlyph(value)

  const glyphData = { char: null, color: 'primary' }
  if (hasGlyph) {
    glyphData.char = glyphsOn ? glyphDictionary[value].char : value + 1
    if (colorsOn) glyphData.color = glyphDictionary[value].color
  }

  const rootClass = `Glyph ${size} `
    + glyphData.color
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
          {glyphData.char}
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
  glyphsOn: state.settings.glyphsOn,
  colorsOn: state.settings.colorsOn,
})

export default connect(mapState)(Glyph)
