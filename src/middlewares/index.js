import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'middlewares/logger'

export default applyMiddleware(thunk, logger)
