import { createSelector } from 'reselect'

const postsSelector = state => state.posts.posts

const filterPostByCategory = (posts, category) =>
  posts.filter(post => post.category === category)

export const getPosts = postsSelector

export const getPostsByCategory = category =>
  createSelector(
    postsSelector,
    posts => filterPostByCategory(posts, category),
  )
