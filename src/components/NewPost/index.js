import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import uuid from 'uuid/v4'

import Button from 'components/Button'
import Title from 'components/Title'

import { savePost } from 'actions/posts'
import { loadCategories } from 'actions/categories'
import { getCategories } from 'selectors/categories'

import { timestampNow } from 'utils/dates'

const NewPost = ({ savePost, loadCategories, categories }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [body, setBody] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    loadCategories()
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    savePost({
      id: uuid(),
      title,
      author,
      category,
      body,
      timestamp: timestampNow(),
    })
    setIsSubmitted(true)
  }

  return isSubmitted ? (
    <Redirect to="/" />
  ) : (
    <form className="flex flex-column" onSubmit={handleSubmit}>
      <header className="flex justify-between">
        <Title>readable</Title>
        <Button type="submit">publish</Button>
      </header>
      <article className="flex">
        <input
          name="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input
          name="author"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
        />
        <select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        >
          {categories.map(c => (
            <option value={c.name}>{c.name}</option>
          ))}
        </select>
        <input
          name="body"
          value={body}
          onChange={({ target }) => setBody(target.value)}
        />
      </article>
    </form>
  )
}

export default connect(
  state => ({ categories: getCategories(state) }),
  dispatch => bindActionCreators({ savePost, loadCategories }, dispatch),
)(NewPost)
