import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ secondary, link, children }) => {
  let classes = secondary ? "button button--blue" : "button"
  return <a href={link} className={classes}>{children}</a>
}

Button.propTypes = {
  link: PropTypes.string.isRequired
}

export default Button


