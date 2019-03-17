import React, { Component } from 'react'
import axios from 'axios'
import ImageGrid from '../../components/ImageGrid/'
// import API_KEY from '../../config/api/api-key'

class SearchGrid extends Component {

  state = {
    data: [],
    currentSearch: 'earth'
  }

  componentDidMount() {
    var url = `https://images-api.nasa.gov/search?q=${this.state.currentSearch}`
    axios.get(url)
      .then(res => {
        this.setState({ data: res.data.collection.items })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="search-grid">
        <h1 className="search-grid__title">Search Results</h1>
        <div className="search-grid__content">
          <ImageGrid data={this.state.data} currentSearch={this.state.currentSearch} />
        </div>
      </div>
    )
  }
}

export default SearchGrid