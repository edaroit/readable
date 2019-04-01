import { createAction } from 'redux-actions'
import { getCategories } from 'utils/api'

export const fetchCategoriesSuccess = createAction('FETCH_CATEGORIES_SUCCESS')
export const fetchCategoriesFailure = createAction('FETCH_CATEGORIES_FAILURE')

export const loadCategories = () => async dispatch => {
  try {
    const response = await getCategories()
    const categories = response.data
    return dispatch(fetchCategoriesSuccess({ categories }))
  } catch (exception) {
    const error = exception.message
    return dispatch(fetchCategoriesFailure({ error }))
  }
}
