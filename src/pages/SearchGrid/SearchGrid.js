import React, { Component } from 'react'
import ImageGrid from '../../components/ImageGrid/'
import Header from '../../components/Header'

class SearchGrid extends Component {
  render() {
    return (
      <div className="search-grid">
        <Header />
        <h1 className="search-grid__title">Search Results</h1>
        <div className="search-grid__content">
          <ImageGrid />
        </div>
      </div>
    )
  }
}

export default SearchGrid