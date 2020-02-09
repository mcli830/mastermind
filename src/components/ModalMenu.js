import React from 'react'
import PropTypes from 'prop-types'

const ModalMenu = ({ children, title, icon }) => {
  return (
    <div className='ModalMenu'>
      <h3>
        {icon && (<span>{icon}</span>)}
        {title && (<span>{title}</span>)}
      </h3>
      <ul className="ModalMenu-content">
        {children}
      </ul>
    </div>
  )
}

ModalMenu.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  icon: PropTypes.node,
}

export default ModalMenu
