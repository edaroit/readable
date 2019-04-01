import { handleActions } from 'redux-actions'
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  savePostRequest,
  savePostSuccess,
  savePostFailure,
  updatePostRequest,
  updatePostSuccess,
  updatePostFailure,
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
    [updatePostRequest]: state => ({
      ...state,
      isPosting: true,
    }),
    [updatePostSuccess]: (state, action) => ({
      ...state,
      posts: state.posts.map(post => {
        if (post.id === action.payload.post.id) {
          return {
            ...post,
            title: action.payload.post.title,
            body: action.payload.post.body,
          }
        }
        return post
      }),
      isPosting: false,
    }),
    [updatePostFailure]: (state, action) => ({
      ...state,
      ...action.payload,
      isPosting: false,
    }),
  },
  initialState,
)

export default reducer
