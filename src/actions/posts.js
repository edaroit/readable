import { createAction } from 'redux-actions'
import { getPosts, postPosts } from 'utils/api'

export const fetchPostsRequest = createAction('FETCH_POSTS_REQUEST')
export const fetchPostsSuccess = createAction('FETCH_POSTS_SUCCESS')
export const fetchPostsFailure = createAction('FETCH_POSTS_FAILURE')
export const savePostRequest = createAction('SAVE_POST_REQUEST')
export const savePostSuccess = createAction('SAVE_POST_SUCCESS')
export const savePostFailure = createAction('SAVE_POST_FAILURE')

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
  dispatch(savePostRequest())
  try {
    await postPosts(post)
    return dispatch(savePostSuccess(post))
  } catch (exception) {
    const error = exception.message
    return dispatch(savePostFailure({ error }))
  }
}
