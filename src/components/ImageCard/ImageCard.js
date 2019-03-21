import React from 'react'
import Button from '../Button'

const ImageCard = ({ imageURL, description, title }) => (
  <div className="image-card">
    <div className="image-card__image">
      <img src={imageURL} alt="" />
    </div>
    <div className="image-card__content">
      <h2 className="image-card__title">{title}</h2>
      <p className="image-card__description">{description}</p>
    </div>
  </div>
)

export default ImageCard