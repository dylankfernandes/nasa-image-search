import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SearchGrid from './pages/SearchGrid'
import Favorites from './pages/Favorites'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/favorites" component={Favorites} />
      <Route exact path="/" component={SearchGrid} />
    </Switch>
  </Router>
)

export default AppRouter