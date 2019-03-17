import React from 'react'
import { Link } from 'react-router-dom'

const ImageCard = ({ imageURL, link }) => (
  <div className="image-grid-item">
    <Link to={link}>
      <img src={imageURL} alt="" />ImageCard
    </Link>
  </div>
)

export default ImageCard