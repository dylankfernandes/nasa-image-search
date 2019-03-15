import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = ({ secondary, link, children }) => {
  let classes = secondary ? "button button--blue" : "button"
  return <Link to={link} className={classes}>{children}</Link>
}

Button.propTypes = {
  link: PropTypes.string.isRequired
}

export default Button


