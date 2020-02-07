import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ children, className, center, top, left, right, bottom }) => {

  if (center) {
    top = left = right = bottom = false
  }
  if (top) bottom = false
  if (left) right = false
  if (right) left = false
  if (bottom) top = false

  const rootClass = 'Modal' +
    (top ? ' top' : '') +
    (center ? ' center' : '') +
    (left ? ' left' : '') +
    (right ? ' right' : '') +
    (bottom ? ' bottom' : '')

  return (
    <div className={rootClass}>
      <div className='Modal-underlay' />
      <div className={`Modal-content ${className}`}>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  top: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  center: PropTypes.bool,
}

Modal.defaultProps = {
  className: '',
  top: false,
  left: false,
  right: false,
  bottom: false,
  center: true,
}

export default Modal
