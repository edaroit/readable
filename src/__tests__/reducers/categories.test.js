import * as actions from 'actions/categories'
import reducer from 'reducers/categories'

describe('reducer', () => {
  describe('fetchCategoriesSuccess', () => {
    let categories
    let payload

    beforeAll(() => {
      categories = [{ name: 'redux', path: 'redux' }]
      payload = { categories }
    })

    it('should update state categories with payload content', () => {
      const state = {
        categories: [{}],
      }
      const newState = reducer(state, actions.fetchCategoriesSuccess(payload))

      expect(newState).toHaveProperty('categories', categories)
    })
  })

  describe('fetchCategoriesFailure', () => {
    let error
    let payload

    beforeAll(() => {
      error = 'Something went wrong'
      payload = { error }
    })

    it('should update state error with payload content', () => {
      const state = {
        error: undefined,
      }
      const newState = reducer(state, actions.fetchCategoriesFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })
  })
})
