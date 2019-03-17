import React, { Component } from 'react'
import Button from '../../components/Button'

import axios from 'axios'

class Item extends Component {

  state = {
    itemDescription: []
  }

  componentWillMount() {
    const { data } = this.props
    var { id } = this.props.match.params

    id = atob(id)
    console.log(id)
    console.log(data)


    // var url = 'https://images-api.nasa.gov/search?q=' + currentSearch
    // axios.get(url)
    //   .then(res => {
    //     this.setState({ data: res.data.collection.items.filter(item => item.href === id) })
    //     console.log(this.state.data);
    //   })
    //   .catch(err => console.log(err))

    // this.setState({
    //   itemDescription: data.collection.items.filter(item => item.href === id)
    // })
    console.log(this.state.itemDescription)
  }

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
