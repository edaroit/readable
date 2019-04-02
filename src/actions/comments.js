import { createAction } from 'redux-actions'
import {
  getComments,
} from 'utils/api'

export const fetchCommentsSuccess = createAction('FETCH_COMMENTS_SUCCESS')
export const fetchCommentsFailure = createAction('FETCH_COMMENTS_FAILURE')

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
