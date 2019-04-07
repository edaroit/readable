import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Button from 'components/Button'
import Header from 'components/Header'

import { getPostById } from 'selectors/posts'

const PostPage = ({ post }) => (
  <Fragment>
    <Header
      buttons={
        <Link to="/">
          <Button secondary>cancel</Button>
        </Link>
      }
    />
    <article>
      <h3>{post.title}</h3>
    </article>
  </Fragment>
)

export default connect((state, { match }) => ({
  post: getPostById(state, match.params.id),
}))(PostPage)
