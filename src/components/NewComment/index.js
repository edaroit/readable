import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import uuid from 'uuid/v4'

import Button from 'components/Button'
import FormField from 'components/FormField'

import { saveComment } from 'actions/comments'

import { timestampNow } from 'utils/dates'

import './new-comment.scss'

const NewComment = ({ saveComment, postId }) => {
  const [author, setAuthor] = useState('')
  const [comment, setComment] = useState('')

  const clearFields = () => {
    setAuthor('')
    setComment('')
  }

  const handleSubmit = event => {
    event.preventDefault()
    saveComment({
      id: uuid(),
      author,
      body: comment,
      parentId: postId,
      timestamp: timestampNow(),
    })
    clearFields()
  }

  return (
    <form className="flex flex-column new-comment" onSubmit={handleSubmit}>
      <FormField
        name="author"
        placeholder="author"
        value={author}
        onChange={({ target }) => setAuthor(target.value)}
      />
      <FormField
        as="textarea"
        name="comment"
        placeholder="comment"
        value={comment}
        rows="3"
        onChange={({ target }) => setComment(target.value)}
      />
      <div className="flex self-end new-comment__button">
        <Button secondary onClick={clearFields}>
          clear
        </Button>
        <Button type="submit">post</Button>
      </div>
    </form>
  )
}

export default connect(
  null,
  dispatch => bindActionCreators({ saveComment }, dispatch),
)(NewComment)
