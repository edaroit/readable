import { createSelector } from 'reselect'

const commentsSelector = state =>
  state.comments.comments.filter(comment => comment.deleted === false)

const filterPostById = (comments, id) => comments.filter(post => post.id === id)

export const getPosts = commentsSelector

export const getPostsById = id =>
  createSelector(
    commentsSelector,
    comments => filterPostById(comments, id),
  )
