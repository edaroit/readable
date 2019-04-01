import { handleActions } from 'redux-actions'
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  savePostsRequest,
  savePostsSuccess,
  savePostsFailure,
} from 'actions/posts'

const initialState = {
  posts: [],
  isFetching: false,
  isPosting: false,
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
    [savePostsRequest]: state => ({
      ...state,
      isPosting: true,
    }),
    [savePostsSuccess]: (state, action) => ({
      ...state,
      posts: [...state.posts, action.payload],
      isPosting: false,
    }),
    [savePostsFailure]: (state, action) => ({
      ...state,
      ...action.payload,
      isPosting: false,
    }),
  },
  initialState,
)

export default reducer
