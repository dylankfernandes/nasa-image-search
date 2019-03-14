import React, { Component } from 'react'
import Header from '../../components/Header'

class Item extends Component {
  render() {
    return (
      <div className="item">
        <Header />
        <div className="item__content">
          <img src={require('../../assets/background/mars2.jpg')} alt="" />
        </div>
      </div>
    )
  }
}

export default Item
