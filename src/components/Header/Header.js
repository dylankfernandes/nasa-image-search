import React, { Component } from 'react'
import moment from 'moment'

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
            <label>Date Range: </label>
            <input className="header__input" id="begin" placeholder={moment(this.state.beginDate).format('M/D/Y')} /> to
            <input className="header__input" id="end" placeholder={moment(this.state.endDate).add(1, 'days').format('M/D/Y')} />
          </div>
          <div class="header__buttons">
            <a href="google.com">Favorites</a>
            <a href="google.com">View Advanced Options</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header