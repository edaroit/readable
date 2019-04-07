import { createSelector } from 'reselect'

const postsSelector = state =>
  state.posts.posts.filter(post => post.deleted === false)

const filterPostById = (posts, id) => posts.filter(post => post.id === id)

export const getPosts = postsSelector

export const getPostsById = id =>
  createSelector(
    postsSelector,
    posts => filterPostById(posts, id),
  )
