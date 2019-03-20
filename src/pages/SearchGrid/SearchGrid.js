import React, { Component } from 'react'
import ImageGrid from '../../components/ImageGrid/'
import Header from '../../components/Header/'

import axios from 'axios'


class SearchGrid extends Component {

  state = {
    data: [],
    currentSearch: {
      query: '',
      beginDate: '',
      endDate: '',
      location: ''
    }
  }

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

  handleSubmit = event => {
    event.preventDefault()
    const { query, beginDate, endDate, location } = this.state;
    var url = `https://images-api.nasa.gov/search?q=${query}&year_start=${beginDate}&year_end=${endDate}&location=${location}`
    axios.get(url)
      .then(res => {
        this.setState({ data: res.data.collection.items })
        console.log(this.state.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header
          onSearchChange={this.handleSearchChange}
          onSubmit={this.handleSubmit}
          onBeginDateChange={this.handleBeginDateChange}
          onEndDateChange={this.handleEndDateChange}
          onLocationChange={this.handleLocationChange}
          currentSearch={this.state.currentSearch} />
        <div className="search-grid">
          <h1 className="search-grid__title">Search Results</h1>
          <div className="search-grid__content">
            <ImageGrid data={this.state.data} currentSearch={this.state.currentSearch} />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchGrid