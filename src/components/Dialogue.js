import React from 'react'
import PropTypes from 'prop-types'
import { glyphDictionary } from '../lib/glyph'

const Dialogue = ({ children, icon, buttons }) => {
  return (
    <div className="Dialogue">
      <figure className="Dialogue-surface" />
      <figure className="Dialogue-border">
        <figure className="border-glyphs">
          {Array.chunk(Array.shuffle(glyphDictionary)).map((g, i, arr) => (
            <div key={i} className="glyph-group">
              {g.map((glyph, ii) => (
                <span key={ii}>
                  {glyphDictionary[(i*4) + ii].char}
                </span>
              ))}
            </div>
          ))}
        </figure>
      </figure>
      <figure className="Dialogue-detail">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="dot" />
      </figure>
      <div className="Dialogue-icon">
        {icon}
      </div>

      <div className="Dialogue-content">
        {children}
      </div>

      <div className="Dialogue-action">
        {buttons.map((d,i) => (
          <button key={i} className="Dialogue-button" onClick={d.func}>
            {d.text}
          </button>
        ))}
      </div>
    </div>
  )
}

Dialogue.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  buttons: PropTypes.array,
}

Dialogue.defaultProps = {
  buttons: [],
}

export default Dialogue
