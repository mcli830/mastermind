import React from 'react'
import PropTypes from 'prop-types'

const ActionButton = ({variant, text}) => {

  const variantClass = variant ? `is-${variant}` : '';

  return (
    <div className={`ActionButton button ${variantClass}`}>
      {text}
    </div>
  )
}

ActionButton.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
}

ActionButton.defaultProps = {
  text: "...",
}

export default ActionButton
