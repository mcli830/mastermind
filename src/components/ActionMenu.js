import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const ActionMenu = (props) => {
  return (
    <div className="ActionMenu">
      <div className="ActionMenu-item">
        <div className='fill button is-primary has-shadow'>
          <FA icon="key" />
        </div>
      </div>
    </div>
  )
}

export default ActionMenu
