const postsSelector = state =>
  state.posts.posts.filter(post => post.deleted === false)

const findPostById = (posts, id) => posts.find(post => post.id === id)

export const getPosts = postsSelector
export const getPostById = (state, id) => findPostById(postsSelector(state), id)
