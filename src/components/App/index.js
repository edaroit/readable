import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from 'components/Dashboard'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/:category/posts">
        <Dashboard />
      </Route>
    </Switch>
  </Router>
)

export default App
