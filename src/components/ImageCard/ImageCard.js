import React from 'react'
import Button from '../Button'

const ImageCard = ({ imageURL, description, title }) => (
  <div className="image-card">
    <div className="image-card__image">
      <img src={imageURL} alt="" />
    </div>
    <div className="image-card__content">
      <h2 className="image-card__title">Insert Title</h2>
      <p className="image-card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos cumque repellat accusantium natus totam animi temporibus quo officia aut adipisci at dolor eum exercitationem minima, voluptatibus eius perferendis expedita.</p>
      <Button>Save to Favorites</Button>
    </div>
  </div>
)

export default ImageCard