import React, { Component } from 'react'
import moment from 'moment'
import Button from '../Button';

const Header = (props) => {
  return (
    <div className="header overlay">
      <div className="header__content">
        <h1 className="header__title">NASA Image Search</h1>
        <form onSubmit={props.onSubmit}>
          <center>
            <input
              value={props.currentSearch.query}
              onChange={props.onSearchChange}
              className="header__input header__search"
              placeholder="Search the archives..." />
          </center>
          <div className="header__options">
            <center><h3 className="header__options-title">Advanced Options</h3></center>
            <div className="header__options-group">
              <label>Year Range (Optional): </label>
              <input
                className="header__input"
                id="begin"
                placeholder={`e.g. ${moment(new Date()).format('YYYY')}`}
                value={props.currentSearch.beginDate}
                onChange={props.onBeginDateChange} /> to
                <input
                className="header__input"
                id="end"
                placeholder={`e.g. ${moment(new Date()).add(1, 'years').format('YYYY')}`}
                value={props.currentSearch.endDate}
                onChange={props.onEndDateChange} />
            </div>
            <div className="header__options-group header__options-group--start">
              <label>Location: </label>
              <input
                className="header__input"
                placeholder="Enter a location here..."
                value={props.currentSearch.location}
                onChange={props.onLocationChange} />
            </div>
            <div className="header__options-group">
              <label>Title: </label>
              <input
                className="header__input header__input--right"
                placeholder="Search by title..."
                value={props.currentSearch.title}
                onChange={props.onTitleChange} />
            </div>
            <div className="header__options-group header__options-group--start">
              <label>Keywords: </label>
              <input
                className="header__input"
                placeholder="Search for keywords..."
                value={props.currentSearch.keywords}
                onChange={props.onKeywordsChange} />
            </div>
            <div className="header__options-group">
              <label>Media Type: </label>
              <select
                className="header__input"
                placeholder="Select a media type..."
                value={props.currentSearch.media}
                onChange={props.onMediaChange}>
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>
          </div>
          <center>
            <input value="Search" type="submit" className="button button--block" />
          </center>
        </form>
      </div>
    </div>
  )
}

export default Header