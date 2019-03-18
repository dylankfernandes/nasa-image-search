import React, { Component } from 'react'
import moment from 'moment'
import Button from '../Button';

class Header extends Component {
  state = {
    beginDate: new Date(),
    endDate: new Date()
  }

  render() {
    return (
      <div className="header overlay">
        <div className="header__content">
          <h1 className="header__title">NASA Image Search</h1>
          <input className="header__input header__search" placeholder="Search the archives..." />
          <div className="header__options">
            <center><h3 className="header__options-title">Advanced Options</h3></center>
            <div className="header__options-group">
              <label>Date Range: </label>
              <input className="header__input" id="begin" placeholder={moment(this.state.beginDate).format('M/D/Y')} /> to
              <input className="header__input" id="end" placeholder={moment(this.state.endDate).add(1, 'days').format('M/D/Y')} />
            </div>
            <div className="header__options-group">
              <label>Location: </label>
              <input className="header__input" placeholder="Enter a location here..." />
            </div>
            <select name="" id="" className="header__input header__archive-selector">
              <option value="">Select an archive to search...</option>
            </select>
          </div>
          <div className="header__buttons">
            <Button link="/search">Search</Button>
            <Button secondary link="/">See Your Favorites</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Header