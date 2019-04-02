import { createAction } from 'redux-actions'
import {
  getComments,
  postComment,
  patchComment,
} from 'utils/api'

export const fetchCommentsSuccess = createAction('FETCH_COMMENTS_SUCCESS')
export const fetchCommentsFailure = createAction('FETCH_COMMENTS_FAILURE')
export const saveCommentSuccess = createAction('SAVE_COMMENT_SUCCESS')
export const saveCommentFailure = createAction('SAVE_COMMENT_FAILURE')
export const voteCommentSuccess = createAction('VOTE_COMMENT_SUCCESS')
export const voteCommentFailure = createAction('VOTE_COMMENT_FAILURE')
export const updateCommentSuccess = createAction('UPDATE_COMMENT_SUCCESS')
export const updateCommentFailure = createAction('UPDATE_COMMENT_FAILURE')

export const loadComments = postId => async dispatch => {
  try {
    const response = await getComments(postId)
    const comments = response.data
    return dispatch(fetchCommentsSuccess({ comments }))
  } catch (exception) {
    const error = exception.message
    return dispatch(fetchCommentsFailure({ error }))
  }
}

export const saveComment = comment => async dispatch => {
  try {
    await postComment(comment)
    return dispatch(saveCommentSuccess(comment))
  } catch (exception) {
    const error = exception.message
    return dispatch(saveCommentFailure({ error }))
  }
}

export const voteComment = (id, option) => async dispatch => {
  try {
    await postComment(option, id)
    const comment = { id, option }
    return dispatch(voteCommentSuccess(comment))
  } catch (exception) {
    const error = exception.message
    return dispatch(voteCommentFailure({ error }))
  }
}

export const updateComment = (id, changes) => async dispatch => {
  try {
    await patchComment(id, changes)
    const comment = { id, ...changes }
    return dispatch(updateCommentSuccess({ comment }))
  } catch (exception) {
    const error = exception.message
    return dispatch(updateCommentFailure({ error }))
  }
}
