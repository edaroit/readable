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

  describe('saveCommentSuccess', () => {
    let comment
    let payload

    beforeAll(() => {
      comment = { body: 'React Hooks' }
      payload = comment
    })

    it('should update state comments with payload content', () => {
      const state = {
        comments: [{ body: 'Redux with React' }],
      }
      const newState = reducer(state, actions.saveCommentSuccess(payload))

      expect(newState).toHaveProperty('comments', [...state.comments, comment])
    })
  })

  describe('saveCommentFailure', () => {
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
      const newState = reducer(state, actions.saveCommentFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })
  })

  describe('voteCommentSuccess', () => {
    let comment
    let payload

    describe('when options is upVote', () => {
      beforeAll(() => {
        comment = { id: 0, option: 'upVote' }
        payload = { comment }
      })

      it('should update state comments with payload content', () => {
        const state = {
          comments: [
            {
              id: 0,
              voteScore: 0,
            },
          ],
        }
        const newState = reducer(state, actions.voteCommentSuccess(payload))
        const updatedComment = newState.comments.find(p => p.id === comment.id)

        expect(updatedComment).toHaveProperty('id', comment.id)
        expect(updatedComment).toHaveProperty('voteScore', 1)
      })
    })

    describe('when options is downVote', () => {
      beforeAll(() => {
        comment = { id: 0, option: 'downVote' }
        payload = { comment }
      })

      it('should update state comments with payload content', () => {
        const state = {
          comments: [
            {
              id: 0,
              voteScore: 1,
            },
          ],
        }
        const newState = reducer(state, actions.voteCommentSuccess(payload))
        const updatedComment = newState.comments.find(p => p.id === comment.id)

        expect(updatedComment).toHaveProperty('id', comment.id)
        expect(updatedComment).toHaveProperty('voteScore', 0)
      })
    })
  })

  describe('voteCommentFailure', () => {
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
      const newState = reducer(state, actions.voteCommentFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })
  })

  describe('updateCommentSuccess', () => {
    let comment
    let payload

    describe('when only body is updated', () => {
      beforeAll(() => {
        comment = { id: 0, body: 'They are great' }
        payload = { comment }
      })

      it('should update state comments with payload content', () => {
        const state = {
          comments: [
            {
              id: 0,
              body: 'Great match',
              author: 'A Nice Guy',
            },
          ],
        }
        const newState = reducer(state, actions.updateCommentSuccess(payload))
        const originalComment = state.comments[0]
        const updatedComment = newState.comments.find(p => p.id === comment.id)

        expect(updatedComment).toHaveProperty('id', comment.id)
        expect(updatedComment).toHaveProperty('body', comment.body)
        expect(updatedComment).toHaveProperty('author', originalComment.author)
      })
    })
  })

  describe('updateCommentFailure', () => {
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
      const newState = reducer(state, actions.updateCommentFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })
  })

  describe('deleteCommentSuccess', () => {
    let comment
    let payload

    beforeAll(() => {
      comment = { id: 0 }
      payload = { comment }
    })

    it('should update state comments with payload content', () => {
      const state = {
        comments: [
          {
            id: 0,
            body: 'Great match',
            author: 'A Nice Guy',
          },
        ],
      }
      const newState = reducer(state, actions.deleteCommentSuccess(payload))

      expect(newState).toHaveProperty('comments', [])
    })
  })

  describe('deleteCommentFailure', () => {
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
      const newState = reducer(state, actions.deleteCommentFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })
  })
})
