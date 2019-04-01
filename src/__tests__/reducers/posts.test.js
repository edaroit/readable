import * as actions from 'actions/posts'
import reducer from 'reducers/posts'

describe('reducer', () => {
  describe('fetchPostsSuccess', () => {
    let posts
    let payload

    beforeAll(() => {
      posts = [{ title: 'Redux with React' }]
      payload = { posts }
    })

    it('should update state posts with payload content', () => {
      const state = {
        posts: [{}],
      }
      const newState = reducer(state, actions.fetchPostsSuccess(payload))

      expect(newState).toHaveProperty('posts', posts)
    })
  })

  describe('fetchPostsFailure', () => {
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
      const newState = reducer(state, actions.fetchPostsFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })
  })

  describe('savePostSuccess', () => {
    let post
    let payload

    beforeAll(() => {
      post = { title: 'React Hooks' }
      payload = post
    })

    it('should update state posts with payload content', () => {
      const state = {
        posts: [{ title: 'Redux with React' }],
      }
      const newState = reducer(state, actions.savePostSuccess(payload))

      expect(newState).toHaveProperty('posts', [...state.posts, post])
    })
  })

  describe('savePostFailure', () => {
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
      const newState = reducer(state, actions.savePostFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })
  })

  describe('votePostSuccess', () => {
    let post
    let payload

    beforeAll(() => {
      post = { id: 0, option: 'upVote' }
      payload = { post }
    })

    it('should update state posts with payload content', () => {
      const state = {
        posts: [
          {
            id: 0,
            voteScore: 0,
          },
        ],
      }
      const newState = reducer(state, actions.votePostSuccess(payload))
      const updatedPost = newState.posts.find(p => p.id === post.id)

      expect(updatedPost).toHaveProperty('id', post.id)
      expect(updatedPost).toHaveProperty('voteScore', 1)
    })
  })

  describe('votePostFailure', () => {
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
      const newState = reducer(state, actions.votePostFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })
  })

  describe('updatePostSuccess', () => {
    let post
    let payload

    beforeAll(() => {
      post = { id: 0, title: 'React Hooks', body: 'They are great' }
      payload = { post }
    })

    it('should update state posts with payload content', () => {
      const state = {
        posts: [
          {
            id: 0,
            title: 'Redux with React',
            body: 'Great match',
            author: 'A Nice Guy',
          },
        ],
      }
      const newState = reducer(state, actions.updatePostSuccess(payload))
      const updatedPost = newState.posts.find(p => p.id === post.id)

      expect(updatedPost).toHaveProperty('id', post.id)
      expect(updatedPost).toHaveProperty('title', post.title)
      expect(updatedPost).toHaveProperty('body', post.body)
      expect(updatedPost).toHaveProperty('author', 'A Nice Guy')
    })
  })

  describe('updatePostFailure', () => {
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
      const newState = reducer(state, actions.updatePostFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })
  })

  describe('deletePostRequest', () => {
    it('should delete isDeleting to true', () => {
      const state = {
        isPosting: false,
      }
      const newState = reducer(state, actions.deletePostRequest())

      expect(newState).toHaveProperty('isDeleting', true)
    })
  })

  describe('deletePostSuccess', () => {
    let post
    let payload

    beforeAll(() => {
      post = { id: 0 }
      payload = { post }
    })

    it('should update state posts with payload content', () => {
      const state = {
        posts: [
          {
            id: 0,
            title: 'Redux with React',
            body: 'Great match',
            author: 'A Nice Guy',
          },
        ],
      }
      const newState = reducer(state, actions.deletePostSuccess(payload))

      expect(newState).toHaveProperty('posts', [])
    })

    it('should delete isDeleting to false', () => {
      const state = {
        posts: [],
        isDeleting: true,
      }
      const newState = reducer(state, actions.deletePostSuccess(payload))

      expect(newState).toHaveProperty('isDeleting', false)
    })
  })

  describe('deletePostFailure', () => {
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
      const newState = reducer(state, actions.deletePostFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })

    it('should delete isDeleting to false', () => {
      const state = {
        isDeleting: true,
      }
      const newState = reducer(state, actions.deletePostFailure(payload))

      expect(newState).toHaveProperty('isDeleting', false)
    })
  })
})
