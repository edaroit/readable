import { createAction } from 'redux-actions'
import { getPosts, postPost, patchPost, removePost } from 'utils/api'

export const fetchPostsSuccess = createAction('FETCH_POSTS_SUCCESS')
export const fetchPostsFailure = createAction('FETCH_POSTS_FAILURE')
export const savePostSuccess = createAction('SAVE_POST_SUCCESS')
export const savePostFailure = createAction('SAVE_POST_FAILURE')
export const votePostSuccess = createAction('VOTE_POST_SUCCESS')
export const votePostFailure = createAction('VOTE_POST_FAILURE')
export const updatePostSuccess = createAction('UPDATE_POST_SUCCESS')
export const updatePostFailure = createAction('UPDATE_POST_FAILURE')
export const deletePostSuccess = createAction('DELETE_POST_SUCCESS')
export const deletePostFailure = createAction('DELETE_POST_FAILURE')

export const loadPosts = () => async dispatch => {
  try {
    const response = await getPosts()
    const posts = response.data
    return dispatch(fetchPostsSuccess(posts))
  } catch (exception) {
    const error = exception.message
    return dispatch(fetchPostsFailure({ error }))
  }
}

export const savePost = post => async dispatch => {
  try {
    await postPost(post)
    return dispatch(savePostSuccess(post))
  } catch (exception) {
    const error = exception.message
    return dispatch(savePostFailure({ error }))
  }
}

export const votePost = (id, option) => async dispatch => {
  try {
    await postPost(option, id)
    const post = { id, option }
    return dispatch(votePostSuccess(post))
  } catch (exception) {
    const error = exception.message
    return dispatch(votePostFailure({ error }))
  }
}

export const updatePost = (id, changes) => async dispatch => {
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
  try {
    await removePost(id)
    const post = { id }
    return dispatch(deletePostSuccess({ post }))
  } catch (exception) {
    const error = exception.message
    return dispatch(deletePostFailure({ error }))
  }
}
