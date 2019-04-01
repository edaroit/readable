import { handleActions } from 'redux-actions'
import {
  fetchPostsSuccess,
  fetchPostsFailure,
  savePostSuccess,
  savePostFailure,
  votePostSuccess,
  votePostFailure,
  updatePostSuccess,
  updatePostFailure,
  deletePostRequest,
  deletePostSuccess,
  deletePostFailure,
} from 'actions/posts'

const initialState = {
  posts: [],
  isDeleting: false,
  error: undefined,
}

const reducer = handleActions(
  {
    [fetchPostsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [fetchPostsFailure]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [savePostSuccess]: (state, action) => ({
      ...state,
      posts: [...state.posts, action.payload],
    }),
    [savePostFailure]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [votePostSuccess]: (state, action) => ({
      ...state,
      posts: state.posts.map(post => {
        if (post.id === action.payload.post.id) {
          return {
            ...post,
            voteScore:
              action.payload.post.option === 'upVote'
                ? post.voteScore + 1
                : post.voteScore - 1,
          }
        }
        return post
      }),
    }),
    [votePostFailure]: (state, action) => ({
      ...state,
      ...action.payload,
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
    }),
    [updatePostFailure]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [deletePostRequest]: state => ({
      ...state,
      isDeleting: true,
    }),
    [deletePostSuccess]: (state, action) => ({
      ...state,
      posts: state.posts.filter(post => post.id !== action.payload.post.id),
      isDeleting: false,
    }),
    [deletePostFailure]: (state, action) => ({
      ...state,
      ...action.payload,
      isDeleting: false,
    }),
  },
  initialState,
)

export default reducer
