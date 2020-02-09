import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clearSelection } from '../state/actions/game'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const BoardMenu = ({ clearSelection }) => {

  const menu = [
    {
      name: 'Clear',
      handler: clearSelection,
      z: 0,
    },
  ]

  return (
    <div className="BoardMenu">
      {menu.map((b,i) => (
        <div key={i} className='column'>
          <button
            className={`BoardMenu-button ${b.color}`}
            onClick={b.handler}
            style={{zIndex: b.z}}
          >
            {b.name}
          </button>
        </div>
      ))}
    </div>
  )
}

const mapDispatch = dispatch => ({
  clearSelection: () => dispatch(clearSelection()),
})

export default connect(null, mapDispatch)(BoardMenu)
