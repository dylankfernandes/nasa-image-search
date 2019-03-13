import React, { Component } from 'react'
import ImageGrid from '../../components/ImageGrid/'

class SearchGrid extends Component {
  render() {
    return (
      <div className="search-grid">
        <h1 className="search-grid__title">Search Results</h1>
        <ImageGrid />
      </div>
    )
  }
}

export default SearchGrid