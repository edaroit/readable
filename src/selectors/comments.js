const commentsSelector = state =>
  state.comments.comments.filter(comment => comment.deleted === false)

export const getComments = commentsSelector
