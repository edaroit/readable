import { handleActions } from 'redux-actions'
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from 'actions/categories'

const initialState = {
  categories: [],
  isFetching: false,
  error: undefined,
}

const reducer = handleActions(
  {
    [fetchCategoriesRequest]: state => ({
      ...state,
      isFetching: true,
    }),
    [fetchCategoriesSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
      isFetching: false,
    }),
    [fetchCategoriesFailure]: (state, action) => ({
      ...state,
      ...action.payload,
      isFetching: false,
    }),
  },
  initialState,
)

export default reducer
