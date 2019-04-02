import { handleActions } from 'redux-actions'
import {
  fetchCommentsSuccess,
  fetchCommentsFailure,
  saveCommentSuccess,
  saveCommentFailure,
  voteCommentSuccess,
  voteCommentFailure,
  updateCommentSuccess,
  updateCommentFailure,
  deleteCommentSuccess,
  deleteCommentFailure,
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
    [voteCommentSuccess]: (state, action) => ({
      ...state,
      comments: state.comments.map(comment => {
        if (comment.id === action.payload.comment.id) {
          return {
            ...comment,
            voteScore:
              action.payload.comment.option === 'upVote'
                ? comment.voteScore + 1
                : comment.voteScore - 1,
          }
        }
        return comment
      }),
    }),
    [voteCommentFailure]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [updateCommentSuccess]: (state, action) => ({
      ...state,
      comments: state.comments.map(comment => {
        if (comment.id === action.payload.comment.id) {
          return {
            ...comment,
            body: action.payload.comment.body || comment.body,
          }
        }
        return comment
      }),
    }),
    [updateCommentFailure]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [deleteCommentSuccess]: (state, action) => ({
      ...state,
      comments: state.comments.filter(
        comment => comment.id !== action.payload.comment.id,
      ),
    }),
    [deleteCommentFailure]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState,
)

export default reducer
