import React from 'react'
import ImageCard from '../ImageCard/';

const ImageGrid = (props) => {
  // since data from the nasa api is not given in a form that can be mapped, we force it into an array
  const data = Array.from(props.data)

  // map over the data, and provide the details retrieved to cards
  const elements = data.map(item => {
    const imageURL = item.links[0].href
    const title = item.data[0].title;
    const description = item.data[0].description;
    return <ImageCard key={imageURL} title={title} description={description} imageURL={imageURL} />
  })
  return <div className="image-grid">{elements}</div>
}

export default ImageGrid