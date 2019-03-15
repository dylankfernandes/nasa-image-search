import React, { Component } from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button';

class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="item__content">
          <div className="item__image">
            <img src={require('../../assets/background/mars2.jpg')} alt="" />
          </div>
          <div className="item__desc">
            <h2 className="item__title">Item Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur autem recusandae dolorum obcaecati quisquam aliquid, non labore beatae nesciunt aut nihil architecto enim. Deserunt vel vero similique corporis velit! Sint.</p>
            <div className="item__footer">
              <Button link="/">Save to Favorites</Button>
              <Button secondary link="/">More Information</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Item
