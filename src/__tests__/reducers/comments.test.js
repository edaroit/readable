import * as actions from 'actions/comments'
import reducer from 'reducers/comments'

describe('reducer', () => {
  describe('fetchCommentsSuccess', () => {
    let comments
    let payload

    beforeAll(() => {
      comments = [{ body: 'Redux with React' }]
      payload = { comments }
    })

    it('should update state comments with payload content', () => {
      const state = {
        comments: [{}],
      }
      const newState = reducer(state, actions.fetchCommentsSuccess(payload))

      expect(newState).toHaveProperty('comments', comments)
    })
  })

  describe('fetchCommentsFailure', () => {
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
      const newState = reducer(state, actions.fetchCommentsFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })
  })
})
