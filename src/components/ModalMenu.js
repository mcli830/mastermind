import React from 'react'
import PropTypes from 'prop-types'

const ModalMenu = ({ children }) => {
  return (
    <div className='ModalMenu'>
      {children}
    </div>
  )
}

ModalMenu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalMenu
