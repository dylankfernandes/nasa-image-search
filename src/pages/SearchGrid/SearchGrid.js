import axios from 'axios'

import React, { Component } from 'react'
import ImageGrid from '../../components/ImageGrid/'
import Header from '../../components/Header/'

import { isEmpty } from '../../config/utils'

class SearchGrid extends Component {

  // starting state
  state = {
    data: [],
    currentSearch: {
      query: '',
      beginDate: '',
      endDate: '',
      location: '',
      keywords: '',
      media: 'image',
      title: ''
    }
  }

  // Each 'onChange' function is copies the initial currentSearch object, 
  // and then copies the new value in the input bar to that object
  handleSearchChange = event => {
    this.setState({
      currentSearch: {
        ...this.state.currentSearch,
        query: event.target.value
      }
    })
  }

  handleBeginDateChange = event => {
    this.setState({
      currentSearch: {
        ...this.state.currentSearch,
        beginDate: event.target.value
      }
    })
  }

  handleEndDateChange = event => {
    this.setState({
      currentSearch: {
        ...this.state.currentSearch,
        endDate: event.target.value
      }
    })
  }

  handleLocationChange = event => {
    this.setState({
      currentSearch: {
        ...this.state.currentSearch,
        location: event.target.value
      }
    })
  }

  handleKeywordsChange = event => {
    this.setState({
      currentSearch: {
        ...this.state.currentSearch,
        keywords: event.target.value
      }
    })
  }

  handleMediaChange = event => {
    this.setState({
      currentSearch: {
        ...this.state.currentSearch,
        media: event.target.value
      }
    })
  }

  handleTitleChange = event => {
    this.setState({
      currentSearch: {
        ...this.state.currentSearch,
        title: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { query, beginDate, endDate, location, keywords, media, title } = this.state.currentSearch;

    var url = 'https://images-api.nasa.gov/search?q='

    // add the parameters to the url if the search parameter has been given to the user
    if (query.length !== 0) {
      url += query
      if (!isEmpty(beginDate)) url += `&year_start=${beginDate}`
      if (!isEmpty(endDate)) url += `&year_end=${endDate}`
      if (!isEmpty(location)) url += `&location=${location}`
      if (!isEmpty(keywords)) url += `&keywords=${keywords}`
      if (!isEmpty(media)) url += `&media_type=${media}`
      if (!isEmpty(title)) url += `&title=${title}`
    }

    // retrieve the data from the api
    if (query.length !== 0) {
      axios.get(url)
        .then(res => {
          this.setState({
            data: res.data.collection.items
          })
        })
        .catch(err => console.log(url))
    }
  }

  render() {
    // if no search results are returned from the NASA API, then reflect that to the user
    let toRender = this.state.data.length !== 0
      ? <ImageGrid data={this.state.data} currentSearch={this.state.currentSearch} />
      : <p className="loading">No Search Results</p>

    return (
      <div>
        {/* pass the current search and 'onChange' functions to the header */}
        <Header
          onSearchChange={this.handleSearchChange}
          onSubmit={this.handleSubmit}
          onBeginDateChange={this.handleBeginDateChange}
          onEndDateChange={this.handleEndDateChange}
          onLocationChange={this.handleLocationChange}
          currentSearch={this.state.currentSearch}
          onKeywordsChange={this.handleKeywordsChange}
          onMediaChange={this.handleMediaChange}
          onTitleChange={this.handleTitleChange} />

        <div className="search-grid">
          <h1 className="search-grid__title">Search Results</h1>
          <div className="search-grid__content">
            {toRender}
          </div>
        </div>
      </div>
    )
  }
}

export default SearchGrid