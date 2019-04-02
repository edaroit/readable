import { combineReducers } from 'redux'
import categories from 'reducers/categories'
import comments from 'reducers/comments'
import posts from 'reducers/posts'

export default combineReducers({
  categories,
  comments,
  posts,
})
