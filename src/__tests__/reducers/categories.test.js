import * as actions from 'actions/categories'
import reducer from 'reducers/categories'

describe('reducer', () => {
  describe('fetchCategoriesRequest', () => {
    it('should update isFetching to true', () => {
      const state = {
        isFetching: false,
      }
      const newState = reducer(state, actions.fetchCategoriesRequest())

      expect(newState).toHaveProperty('isFetching', true)
    })
  })

  describe('fetchCategoriesSuccess', () => {
    let categories
    let payload

    beforeAll(() => {
      categories = [{ name: 'redux', path: 'redux' }]
      payload = { categories }
    })

    it('should update categories to payload categories', () => {
      const state = {
        categories: [{}],
      }
      const newState = reducer(state, actions.fetchCategoriesSuccess(payload))

      expect(newState).toHaveProperty('categories', categories)
    })

    it('should update isFetching to false', () => {
      const state = {
        isFetching: true,
      }
      const newState = reducer(state, actions.fetchCategoriesSuccess(payload))

      expect(newState).toHaveProperty('isFetching', false)
    })
  })

  describe('fetchCategoriesFailure', () => {
    let error
    let payload

    beforeAll(() => {
      error = 'Something went wrong'
      payload = { error }
    })

    it('should update error to payload error', () => {
      const state = {
        error: undefined,
      }
      const newState = reducer(state, actions.fetchCategoriesFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })

    it('should update isFetching to false', () => {
      const state = {
        isFetching: true,
      }
      const newState = reducer(state, actions.fetchCategoriesFailure(payload))

      expect(newState).toHaveProperty('isFetching', false)
    })
  })
})
