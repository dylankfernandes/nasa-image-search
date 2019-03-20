import React from 'react'
import ImageCard from '../ImageCard/';

const ImageGrid = (props) => {
  const data = Array.from(props.data)
  const elements = data.map(item => {
    const imageURL = item.links[0].href
    const title = item.data[0].title;
    const description = item.data[0].description;
    return <ImageCard key={imageURL} title={title} description={description} imageURL={imageURL} />
  })
  return <div className="image-grid">{elements}</div>
}

export default ImageGrid