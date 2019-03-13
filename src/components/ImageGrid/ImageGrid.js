import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ImageGrid extends Component {

  componentWillMount() {

  }

  render() {
    return (
      <div className="image-grid">
        <h1 className="image-grid__title">Image Grid</h1>
        <div className="image-grid__wrapper">
          <div className="image-grid__item">
            <a href="google.com">
              <img src={require('../../assets/background/mars2.jpg')} alt="" />
            </a>
          </div>
          <div className="image-grid__item">
            <a href="google.com">
              <img src={require('../../assets/background/mars2.jpg')} alt="" />
            </a>
          </div>
          <div className="image-grid__item">
            <a href="google.com">
              <img src={require('../../assets/background/mars2.jpg')} alt="" />
            </a>
          </div>
          <div className="image-grid__item">
            <a href="google.com">
              <img src={require('../../assets/background/mars2.jpg')} alt="" />
            </a>
          </div>
          <div className="image-grid__item">
            <a href="google.com">
              <img src={require('../../assets/background/mars2.jpg')} alt="" />
            </a>
          </div>
          <div className="image-grid__item">
            <a href="google.com">
              <img src={require('../../assets/background/mars2.jpg')} alt="" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

ImageGrid.propTypes = {
  data: PropTypes.object
}

export default ImageGrid