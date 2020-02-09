import React from 'react'
import { connect } from 'react-redux'
import Glyph from './Glyph'
import { addGlyph } from '../state/actions/game'

const Pool = ({
  pool,
  selection,
  addGlyph,
}) => {

  const isSelected = (i) => {
    return selection.indexOf(i) >= 0
  }

  return (
    <div className="Pool">
      {Array.chunk(pool, 2).map((column,ia) => (
        <div key={ia} className='Pool-column'>
          {column.map((item,ib) => (
            <div key={ib} className="Pool-item">
              <Glyph
                value={item.value}
                size="md"
                hide={isSelected(item.id)}
                onClick={() => addGlyph(item.id)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

const mapState = state => ({
  pool: state.game.pool,
  selection: state.game.selection,
})

const mapDispatch = dispatch => ({
  addGlyph: (id) => dispatch(addGlyph(id)),
})

export default connect(mapState, mapDispatch)(Pool)
