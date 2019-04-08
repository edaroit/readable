import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from 'components/Button'
import Comment from 'components/Comment'
import Header from 'components/Header'
import NewComment from 'components/NewComment'
import Post from 'components/Post'
import Separator from 'components/Separator'

import { loadComments, voteComment } from 'actions/comments'
import { loadPosts } from 'actions/posts'
import { getComments } from 'selectors/comments'
import { getPostById } from 'selectors/posts'

import './post-page.scss'

const Comments = ({ comments, postId, onVote }) => (
  <section className="post-page__comments">
    <h3 className="post-page__comments__title">{comments.length} responses</h3>
    <NewComment postId={postId} />
    {comments.map(comment => (
      <Fragment key={comment.id}>
        <Comment {...comment} onVote={onVote} />
        <Separator />
      </Fragment>
    ))}
  </section>
)

const PostPage = ({
  loadComments,
  loadPosts,
  voteComment,
  comments = [],
  post = {},
}) => {
  useEffect(() => {
    loadPosts()
  }, [])

  useEffect(() => {
    loadComments(post.id)
  }, [post])

  return (
    <Fragment>
      <Header
        buttons={
          <Link to="/">
            <Button secondary>cancel</Button>
          </Link>
        }
      />
      <Post compact={false} {...post} />
      <Comments comments={comments} postId={post.id} onVote={voteComment} />
    </Fragment>
  )
}

export default connect(
  (state, { match }) => ({
    comments: getComments(state),
    post: getPostById(state, match.params.id),
  }),
  dispatch =>
    bindActionCreators({ loadComments, loadPosts, voteComment }, dispatch),
)(PostPage)
