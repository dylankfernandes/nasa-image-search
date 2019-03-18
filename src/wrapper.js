import React, { Component } from 'react'

class Wrapper extends Component {
  state = {
    currentSearch: '',
    data: ''
  }

  handleSearchChange = () => {

  }

  handleSearchSubmit = () => {

  }

  render() {
    return <div className="wrapper">{this.props.children}</div>
  }
}

export default Wrapper


