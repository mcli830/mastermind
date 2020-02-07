import React from 'react'
import PropTypes from 'prop-types'

const ModalMenu = ({ children, title, icon }) => {
  return (
    <ul className='ModalMenu'>
      <h3>
        {icon && (<span>{icon}</span>)}
        {title && (<span>{title}</span>)}
      </h3>
      {children}
    </ul>
  )
}

ModalMenu.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  icon: PropTypes.node,
}

export default ModalMenu
