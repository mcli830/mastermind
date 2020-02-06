import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setLefty } from '../state/actions/settings'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const BoardMenu = ({ lefty, setLefty }) => {

  const menu = [
    {
      name: 'Lefty',
      color: lefty ? 'on' : '',
      handler: () => setLefty(true),
      z: 1,
    },
    {
      name: 'Clear',
      color: 'warn',
      handler: () => null,
      z: 0,
    },
    {
      name: 'Righty',
      color: lefty ? '' : 'on',
      handler: () => setLefty(false),
      z: 1,
    },
  ]

  return (
    <div className="BoardMenu">
      {menu.map((b,i) => (
        <div className='column'>
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
})

export default connect(mapState)(BoardMenu)
