import { createSelector } from 'reselect'

const postsSelector = state => state.posts.posts

const filterPostByCategory = (posts, category) =>
  posts.filter(post => post.category === category)

const filterPostById = (posts, id) => posts.filter(post => post.id === id)

export const getPosts = postsSelector

export const getPostsByCategory = category =>
  createSelector(
    postsSelector,
    posts => filterPostByCategory(posts, category),
  )

export const getPostsById = id =>
  createSelector(
    postsSelector,
    posts => filterPostById(posts, id),
  )
