import React, { Fragment, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import uuid from 'uuid/v4'

import Button from 'components/Button'
import Chip from 'components/Chip'
import FormField from 'components/FormField'
import Header from 'components/Header'

import { savePost } from 'actions/posts'
import { loadCategories } from 'actions/categories'
import { getCategories } from 'selectors/categories'

import { timestampNow } from 'utils/dates'

import './new-post.scss'

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
      <Header
        buttons={
          <Fragment>
            <Link to="/">
              <Button secondary>cancel</Button>
            </Link>
            <Button type="submit">publish</Button>
          </Fragment>
        }
        justifyButtons="between"
      />
      <article className="flex flex-column new-post">
        <FormField
          className="new-post__input--title"
          name="title"
          placeholder="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <FormField
          name="author"
          placeholder="author"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
        />
        <div className="flex new-post__categories">
          {categories.map(c => (
            <Chip
              key={c.id}
              onClick={() => setCategory(c.name)}
              selected={category === c.name}
            >
              {c.name}
            </Chip>
          ))}
        </div>
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
  state => ({ categories: getCategories(state) }),
  dispatch => bindActionCreators({ savePost, loadCategories }, dispatch),
)(NewPost)
