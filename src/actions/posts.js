import { createAction } from 'redux-actions'
import { getPosts, postPosts } from 'utils/api'

export const fetchPostsRequest = createAction('FETCH_POSTS_REQUEST')
export const fetchPostsSuccess = createAction('FETCH_POSTS_SUCCESS')
export const fetchPostsFailure = createAction('FETCH_POSTS_FAILURE')
export const savePostsRequest = createAction('SAVE_POSTS_REQUEST')
export const savePostsSuccess = createAction('SAVE_POSTS_SUCCESS')
export const savePostsFailure = createAction('SAVE_POSTS_FAILURE')

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

export const savePost = post => async dispatch => {
  dispatch(savePostsRequest())
  try {
    await postPosts(post)
    return dispatch(savePostsSuccess(post))
  } catch (exception) {
    const error = exception.message
    return dispatch(savePostsFailure({ error }))
  }
}
