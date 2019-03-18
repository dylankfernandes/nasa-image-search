import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = ({ secondary, children }) => {
  let classes = secondary ? "button button--blue" : "button"
  return <button className={classes}>{children}</button>
}

export default Button


