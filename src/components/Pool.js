import React from 'react'
import { connect } from 'react-redux'
import Glyph from './Glyph'
import Spinner from './Spinner'
import { addGlyph } from '../state/actions/game'

const Pool = ({
  dispatch,
  pool,
  loading,
  error,
  selection,
  addGlyph,
}) => {

  const isSelected = (i) => {
    return selection.indexOf(i) >= 0
  }

  const renderAsync = () => {
    if (error) {
      return <p style={{color:'white'}}>Error! {error.message}</p>
    }
    if (loading) {
      return <Spinner />
    }
    return (
      <>
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
      </>
    )
  }

  return (
    <div className="Pool">
      {renderAsync()}
    </div>
  )
}

const mapState = state => ({
  pool: state.game.pool,
  loading: state.game.loading,
  error: state.game.error,
  selection: state.game.selection,
})

const mapDispatch = dispatch => ({
  addGlyph: (id) => dispatch(addGlyph(id)),
})

export default connect(mapState, mapDispatch)(Pool)
