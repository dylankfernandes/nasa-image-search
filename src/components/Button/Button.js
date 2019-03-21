import React from 'react'

const Button = ({ secondary, children, link }) => {
  let classes = secondary ? "button button--blue" : "button"
  return link
    ? <a href={link} className={classes}>{children}</a>
    : <button className={classes}>{children}</button>
}

export default Button


