import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from 'components/Dashboard'
import NewPost from 'components/NewPost'
import PostPage from 'components/PostPage'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/new" component={NewPost} />
      <Route exact path="/:category" component={Dashboard} />
      <Route exact path="/:category/:id" component={PostPage} />
    </Switch>
  </Router>
)

export default App
