import { handleActions } from 'redux-actions'
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  savePostRequest,
  savePostSuccess,
  savePostFailure,
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
    [savePostRequest]: state => ({
      ...state,
      isPosting: true,
    }),
    [savePostSuccess]: (state, action) => ({
      ...state,
      posts: [...state.posts, action.payload],
      isPosting: false,
    }),
    [savePostFailure]: (state, action) => ({
      ...state,
      ...action.payload,
      isPosting: false,
    }),
  },
  initialState,
)

export default reducer
