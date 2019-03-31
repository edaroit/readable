import { createAction } from 'redux-actions'
import { getPosts } from 'utils/api'

export const fetchPostsRequest = createAction('FETCH_POSTS_REQUEST')
export const fetchPostsSuccess = createAction('FETCH_POSTS_SUCCESS')
export const fetchPostsFailure = createAction('FETCH_POSTS_FAILURE')

export const loadPosts = () => async dispatch => {
  dispatch(fetchPostsRequest())
  try {
    const response = await getPosts()
    const posts = response.data
    return dispatch(fetchPostsSuccess({ posts }))
  } catch (exception) {
    const error = exception.message
    return dispatch(fetchPostsFailure({ error }))
  }
}
