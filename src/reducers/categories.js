import { handleActions } from 'redux-actions'
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from 'actions/categories'

const initialState = {
  categories: [],
  error: undefined,
}

const reducer = handleActions(
  {
    [fetchCategoriesSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [fetchCategoriesFailure]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState,
)

export default reducer
