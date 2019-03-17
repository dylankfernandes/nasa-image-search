import React from 'react'
import ImageGridItem from '../ImageGridItem/ImageGridItem';

const ImageGrid = (props) => {
  const data = Array.from(props.data)
  console.log(data);

  const elements = data.map(item => {
    const imageURL = item.links[0].href
    const id = item.href;
    return <ImageGridItem key={btoa(id)} link={`/image/${btoa(id)}`} imageURL={imageURL} />
  })
  return <div className="image-grid">{elements}</div>
}

export default ImageGrid