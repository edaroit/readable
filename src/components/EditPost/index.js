import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from 'components/Button'
import FormField from 'components/FormField'
import Header from 'components/Header'

import { updatePost } from 'actions/posts'
import { getPostById } from 'selectors/posts'

import { timestampNow } from 'utils/dates'

import './edit-post.scss'

const EditPost = ({ updatePost, post }) => {
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    updatePost(post.id, {
      title,
      body,
      timestamp: timestampNow(),
    })
    setIsSubmitted(true)
  }

  return isSubmitted ? (
    <Redirect to={`/${post.category}/${post.id}`} />
  ) : (
    <form className="flex flex-column" onSubmit={handleSubmit}>
      <Header
        buttons={
          <Fragment>
            <Link to="/">
              <Button secondary>cancel</Button>
            </Link>
            <Button type="submit">save</Button>
          </Fragment>
        }
        justifyButtons="between"
      />
      <article className="flex flex-column edit-post">
        <FormField
          className="edit-post__input--title"
          name="title"
          placeholder="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <FormField
          as="textarea"
          name="body"
          placeholder="body"
          rows="20"
          value={body}
          onChange={({ target }) => setBody(target.value)}
        />
      </article>
    </form>
  )
}

export default connect(
  (state, { match }) => ({
    post: getPostById(state, match.params.id),
  }),
  dispatch => bindActionCreators({ updatePost }, dispatch),
)(EditPost)
