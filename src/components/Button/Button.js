import React from 'react'

const Button = ({ secondary, children, link }) => {
  /* If the secondary attribute is provided, then we make the button blue with an extra class */
  let classes = secondary ? "button button--blue" : "button"

  /* If a link is provided, we assume that we are trying to navigate to another page and not perform an action */
  return link
    ? <a href={link} className={classes}>{children}</a>
    : <button className={classes}>{children}</button>
}

export default Button


