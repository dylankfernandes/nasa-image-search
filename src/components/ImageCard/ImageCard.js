import React from 'react'

const ImageCard = ({ imageURL, link }) => (
  <div className="image-card">
    <a to={link}>
      <img src={imageURL} alt="" />
    </a>
  </div>
)

export default ImageCard