import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from 'components/Button'
import FormField from 'components/FormField'

import { updateComment } from 'actions/comments'

import { timestampNow } from 'utils/dates'

import './edit-comment.scss'

const EditComment = ({ updateComment, onSubmit, comment }) => {
  const [body, setBody] = useState(comment.body)

  const handleSubmit = event => {
    event.preventDefault()
    updateComment(comment.id, {
      body,
      timestamp: timestampNow(),
    })
    onSubmit()
  }

  return (
    <form className="flex flex-column edit-comment" onSubmit={handleSubmit}>
      <FormField
        as="textarea"
        name="comment"
        placeholder="comment"
        value={body}
        rows="3"
        onChange={({ target }) => setBody(target.value)}
      />
      <div className="flex self-end edit-comment__button">
        <Button type="submit">save</Button>
      </div>
    </form>
  )
}

export default connect(
  null,
  dispatch => bindActionCreators({ updateComment }, dispatch),
)(EditComment)
