import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from 'components/Button'
import Header from 'components/Header'
import Post from 'components/Post'

import { loadPosts } from 'actions/posts'
import { getPostById } from 'selectors/posts'

const PostPage = ({ loadPosts, post = {} }) => {
  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <Fragment>
      <Header
        buttons={
          <Link to="/">
            <Button secondary>cancel</Button>
          </Link>
        }
      />
      <Post {...post} />
    </Fragment>
  )
}

export default connect(
  (state, { match }) => ({
    post: getPostById(state, match.params.id),
  }),
  dispatch => bindActionCreators({ loadPosts }, dispatch),
)(PostPage)
