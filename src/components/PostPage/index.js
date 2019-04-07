import React from 'react'
import { connect } from 'react-redux'

import { getPostById } from 'selectors/posts'

const PostPage = ({ post }) => <div>{post.title}</div>

export default connect((state, { match }) => ({
  post: getPostById(state, match.params.id),
}))(PostPage)
