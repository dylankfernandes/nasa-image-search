import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import SearchGrid from '../pages/SearchGrid'
import Item from '../pages/Item'
import Header from '../components/Header'

const AppRouter = () => (
  <Router>
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchGrid} />
        <Route path="/item" component={Item} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter