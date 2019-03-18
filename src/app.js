import React, { Component } from 'react'
import Header from './components/Header';
import SearchGrid from './pages/SearchGrid/SearchGrid';

class App extends Component {
  state = {
    currentSearch: '',
    data: ''
  }

  handleSearchChange = () => {

  }

  handleSearchSubmit = () => {

  }

  render() {
    return (
      <div className="app">
        <Header />
        <SearchGrid />
      </div>
    )
  }
}

export default App


