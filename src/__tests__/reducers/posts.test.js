import * as actions from 'actions/posts'
import reducer from 'reducers/posts'

describe('reducer', () => {
  describe('fetchPostsRequest', () => {
    it('should update isFetching to true', () => {
      const state = {
        isFetching: false,
      }
      const newState = reducer(state, actions.fetchPostsRequest())

      expect(newState).toHaveProperty('isFetching', true)
    })
  })

  describe('fetchPostsSuccess', () => {
    let posts
    let payload

    beforeAll(() => {
      posts = [{ title: 'Redux with React' }]
      payload = { posts }
    })

    it('should update posts to payload posts', () => {
      const state = {
        posts: [{}],
      }
      const newState = reducer(state, actions.fetchPostsSuccess(payload))

      expect(newState).toHaveProperty('posts', posts)
    })

    it('should update isFetching to false', () => {
      const state = {
        isFetching: true,
      }
      const newState = reducer(state, actions.fetchPostsSuccess(payload))

      expect(newState).toHaveProperty('isFetching', false)
    })
  })

  describe('fetchPostsFailure', () => {
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
      const newState = reducer(state, actions.fetchPostsFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })

    it('should update isFetching to false', () => {
      const state = {
        isFetching: true,
      }
      const newState = reducer(state, actions.fetchPostsFailure(payload))

      expect(newState).toHaveProperty('isFetching', false)
    })
  })

  describe('savePostRequest', () => {
    it('should update isPosting to true', () => {
      const state = {
        isPosting: false,
      }
      const newState = reducer(state, actions.savePostRequest())

      expect(newState).toHaveProperty('isPosting', true)
    })
  })

  describe('savePostSuccess', () => {
    let post
    let payload

    beforeAll(() => {
      post = { title: 'React Hooks' }
      payload = post
    })

    it('should update posts to payload posts', () => {
      const state = {
        posts: [{ title: 'Redux with React' }],
      }
      const newState = reducer(state, actions.savePostSuccess(payload))

      expect(newState).toHaveProperty('posts', [...state.posts, post])
    })

    it('should update isPosting to false', () => {
      const state = {
        posts: [],
        isPosting: true,
      }
      const newState = reducer(state, actions.savePostSuccess(payload))

      expect(newState).toHaveProperty('isPosting', false)
    })
  })

  describe('savePostFailure', () => {
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
      const newState = reducer(state, actions.savePostFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })

    it('should update isPosting to false', () => {
      const state = {
        isPosting: true,
      }
      const newState = reducer(state, actions.savePostFailure(payload))

      expect(newState).toHaveProperty('isPosting', false)
    })
  })

  describe('updatePostRequest', () => {
    it('should update isPosting to true', () => {
      const state = {
        isPosting: false,
      }
      const newState = reducer(state, actions.updatePostRequest())

      expect(newState).toHaveProperty('isPosting', true)
    })
  })

  describe('updatePostSuccess', () => {
    let post
    let payload

    beforeAll(() => {
      post = { id: 0, title: 'React Hooks', body: 'They are great' }
      payload = { post }
    })

    it('should update posts to payload posts', () => {
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

    it('should update isPosting to false', () => {
      const state = {
        posts: [],
        isPosting: true,
      }
      const newState = reducer(state, actions.updatePostSuccess(payload))

      expect(newState).toHaveProperty('isPosting', false)
    })
  })

  describe('updatePostFailure', () => {
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
      const newState = reducer(state, actions.updatePostFailure(payload))

      expect(newState).toHaveProperty('error', error)
    })

    it('should update isPosting to false', () => {
      const state = {
        isPosting: true,
      }
      const newState = reducer(state, actions.updatePostFailure(payload))

      expect(newState).toHaveProperty('isPosting', false)
    })
  })
})
