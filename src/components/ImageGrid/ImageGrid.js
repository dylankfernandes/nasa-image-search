import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ImageGrid = ({ data }) => {
  return (
    <div className="image-grid">
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
  )
}

export default ImageGrid