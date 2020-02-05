import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Glyph from './Glyph'
import Spinner from './Spinner'
import { addGlyph } from '../state/actions/game'
import { fetchRandomApi } from '../state/actions/random'

const Pool = ({
  dispatch,
  pool,
  loading,
  error,
  selection,
  fetchRandomApi,
  addGlyph,
}) => {

  React.useEffect(() => {
    console.log('Fetching pool from random.org')
    fetchRandomApi()
  }, [])

  const isSelected = (i) => {
    console.log({i, selection})
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
                  large
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
  fetchRandomApi: () => dispatch(fetchRandomApi()),
  addGlyph: (id) => dispatch(addGlyph(id))
})

export default connect(mapState, mapDispatch)(Pool)
