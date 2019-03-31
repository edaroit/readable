import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from 'reducers'
import middleware from 'middlewares'
import App from 'components/App'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
