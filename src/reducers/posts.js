import { handleActions } from 'redux-actions'
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
} from 'actions/posts'

const initialState = {
  posts: [],
  isFetching: false,
  error: undefined,
}

const reducer = handleActions(
  {
    [fetchPostsRequest]: state => ({
      ...state,
      isFetching: true,
    }),
    [fetchPostsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
      isFetching: false,
    }),
    [fetchPostsFailure]: (state, action) => ({
      ...state,
      ...action.payload,
      isFetching: false,
    }),
  },
  initialState,
)

export default reducer
