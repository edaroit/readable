import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Dashboard from 'components/Dashboard'

const App = () => (
  <Router>
    <Route path="/">
      <Dashboard />
    </Route>
  </Router>
)

export default App
