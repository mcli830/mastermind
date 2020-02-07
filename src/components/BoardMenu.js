import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setLefty } from '../state/actions/settings'
import { clearSelection } from '../state/actions/game'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const BoardMenu = ({ lefty, setLefty, clearSelection }) => {

  const menu = [
    {
      name: 'Lefty',
      color: lefty ? 'on' : null,
      handler: () => setLefty(true),
      z: 1,
    },
    {
      name: 'Clear',
      handler: clearSelection,
      z: 0,
    },
    {
      name: 'Righty',
      color: lefty ? null : 'on',
      handler: () => setLefty(false),
      z: 1,
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

const mapState = state => ({
  lefty: state.settings.lefty,
})

const mapDispatch = dispatch => ({
  setLefty: bool => dispatch(setLefty(bool)),
  clearSelection: () => dispatch(clearSelection()),
})

export default connect(mapState, mapDispatch)(BoardMenu)
