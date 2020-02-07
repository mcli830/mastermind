import React from 'react'
import PropTypes from 'prop-types'

const ModalMenu = ({ children, title }) => {
  return (
    <ul className='ModalMenu'>
      {title && <h3>{title}</h3>}
      {children}
    </ul>
  )
}

ModalMenu.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default ModalMenu
