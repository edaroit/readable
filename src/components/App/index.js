import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from 'components/Dashboard'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/:category" component={Dashboard} />
    </Switch>
  </Router>
)

export default App
