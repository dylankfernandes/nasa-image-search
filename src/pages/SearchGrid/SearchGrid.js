import React, { Component } from 'react'
import axios from 'axios'
import ImageGrid from '../../components/ImageGrid/'
import Header from '../../components/Header'
import API_KEY from '../../config/api-key'

class SearchGrid extends Component {

  state = {
    data: ''
  }

  componentWillMount() {
    var url = 'https://api.nasa.gov/planetary/apod?api_key=' + API_KEY
    axios.get(url)
      .then(res => {
        this.setState({
          data: res.data,
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="search-grid">
        <h1 className="search-grid__title">Search Results</h1>
        <div className="search-grid__content">
          <ImageGrid />
        </div>
      </div>
    )
  }
}

export default SearchGrid