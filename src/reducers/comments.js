import { handleActions } from 'redux-actions'
import {
  fetchCommentsSuccess,
  fetchCommentsFailure,
  saveCommentSuccess,
  saveCommentFailure,
} from 'actions/comments'

const initialState = {
  comments: [],
  error: undefined,
}

const reducer = handleActions(
  {
    [fetchCommentsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [fetchCommentsFailure]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [saveCommentSuccess]: (state, action) => ({
      ...state,
      comments: [...state.comments, action.payload],
    }),
    [saveCommentFailure]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState,
)

export default reducer
