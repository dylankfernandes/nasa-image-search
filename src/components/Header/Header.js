import React, { Component } from 'react'
import moment from 'moment'
import Button from '../Button';

class Header extends Component {
  render() {
    return (
      <div className="header overlay">
        <div className="header__content">
          <h1 className="header__title">NASA Image Search</h1>
          <form onSubmit={this.props.onSubmit}>
            <center><input value={this.props.currentSearch.query} onChange={this.props.onSearchChange} className="header__input header__search" placeholder="Search the archives..." /></center>
            <div className="header__options">
              <center><h3 className="header__options-title">Advanced Options</h3></center>
              <div className="header__options-group">
                <label>Year Range (Optional): </label>
                <input
                  className="header__input"
                  id="begin"
                  placeholder={`e.g. ${moment(new Date()).format('YYYY')}`}
                  value={this.props.currentSearch.beginDate}
                  onChange={this.props.onBeginDateChange} /> to
                <input
                  className="header__input"
                  id="end"
                  placeholder={`e.g. ${moment(new Date()).add(1, 'years').format('YYYY')}`}
                  value={this.props.currentSearch.endDate}
                  onChange={this.props.onEndDateChange} />
              </div>
              <div className="header__options-group">
                <label>Location: </label>
                <input
                  className="header__input"
                  placeholder="Enter a location here..."
                  value={this.props.currentSearch.location}
                  onChange={this.props.onLocationChange} />
              </div>
            </div>
            <center className="header__buttons">
              <input value="Search" type="submit" className="button" />
            </center>
          </form>
        </div>
      </div>
    )
  }
}

export default Header