import React from 'react'
import { Link } from 'react-router-dom'

const ImageGridItem = ({ imageURL, link }) => (
  <div className="image-grid-item">
    <Link to={link}>
      <img src={imageURL} alt="" />
    </Link>
  </div>
)

export default ImageGridItem