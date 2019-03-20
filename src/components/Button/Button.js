import React from 'react'

const Button = ({ secondary, children, text }) => {
  let classes = secondary ? "button button--blue" : "button"
  let buttonText = text ? text : children
  return <button className={classes}>{buttonText}</button>
}

export default Button


