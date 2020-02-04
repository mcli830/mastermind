import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPool } from '../state/actions/pool'

import Glyph from './Glyph'

const Pool = ({ dispatch, pool, loading, error}) => {

  console.log({
    pool,
    loading,
    error
  })

  React.useEffect(() => {
    console.log('Fetching pool from random.org')
    dispatch(fetchPool())
  }, [])

  const renderAsync = () => {
    if (error) {
      return <p style={{color:'white'}}>Error! {error.message}</p>
    }
    if (loading) {
      return <p style={{color:'white'}}>Loading...</p>
    }
    return (
      <>
        {Array.chunk(pool, 2).map((g,ia) => (
          <div key={ia} className='Pool-column'>
            {g.map((n,ib) => (
              <div key={ib} className="Pool-item">
                <Glyph value={n} large />
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
  pool: state.pool.items,
  loading: state.pool.loading,
  error: state.pool.error,
})

export default connect(mapState)(Pool)
