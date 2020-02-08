import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ children, className, center, top, left, right, bottom, onClose }) => {

  if (top) bottom = false
  if (left) right = false
  if (right) left = false
  if (bottom) top = false
  if (!(top || left || right || bottom)) center = true
  if (center) {
    top = left = right = bottom = false
  }

  const rootClass = 'Modal' +
    (top ? ' top' : '') +
    (left ? ' left' : '') +
    (right ? ' right' : '') +
    (bottom ? ' bottom' : '') +
    (center ? ' center' : '')

  const clickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (onClose) onClose()
  }

  return (
    <div className={rootClass}>
      <div className='Modal-underlay' onClick={clickHandler}/>
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
  onClose: PropTypes.func,
}

Modal.defaultProps = {
  className: '',
  top: false,
  left: false,
  right: false,
  bottom: false,
  center: false,
}

export default Modal
