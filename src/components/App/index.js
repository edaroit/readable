import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from 'components/Dashboard'
import NewPost from 'components/NewPost'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/new" component={NewPost} />
      <Route exact path="/:category" component={Dashboard} />
    </Switch>
  </Router>
)

export default App
