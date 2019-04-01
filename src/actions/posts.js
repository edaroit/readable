import { createAction } from 'redux-actions'
import { getPosts, postPost, patchPost, removePost } from 'utils/api'

export const fetchPostsRequest = createAction('FETCH_POSTS_REQUEST')
export const fetchPostsSuccess = createAction('FETCH_POSTS_SUCCESS')
export const fetchPostsFailure = createAction('FETCH_POSTS_FAILURE')
export const savePostRequest = createAction('SAVE_POST_REQUEST')
export const savePostSuccess = createAction('SAVE_POST_SUCCESS')
export const savePostFailure = createAction('SAVE_POST_FAILURE')
export const updatePostRequest = createAction('UPDATE_POST_REQUEST')
export const updatePostSuccess = createAction('UPDATE_POST_SUCCESS')
export const updatePostFailure = createAction('UPDATE_POST_FAILURE')
export const deletePostRequest = createAction('REMOVE_POST_REQUEST')
export const deletePostSuccess = createAction('REMOVE_POST_SUCCESS')
export const deletePostFailure = createAction('REMOVE_POST_FAILURE')

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
    await postPost(post)
    return dispatch(savePostSuccess(post))
  } catch (exception) {
    const error = exception.message
    return dispatch(savePostFailure({ error }))
  }
}

export const updatePost = (id, changes) => async dispatch => {
  dispatch(updatePostRequest())
  try {
    await patchPost(id, changes)
    const post = { id, ...changes }
    return dispatch(updatePostSuccess({ post }))
  } catch (exception) {
    const error = exception.message
    return dispatch(updatePostFailure({ error }))
  }
}

export const deletePost = id => async dispatch => {
  dispatch(deletePostRequest())
  try {
    await removePost(id)
    const post = { id }
    return dispatch(deletePostSuccess({ post }))
  } catch (exception) {
    const error = exception.message
    return dispatch(deletePostFailure({ error }))
  }
}
