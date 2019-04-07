import React, { Fragment, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import uuid from 'uuid/v4'

import Button from 'components/Button'
import Chip from 'components/Chip'
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
    <Fragment>
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
      <form className="flex flex-column" onSubmit={handleSubmit}>
        <article className="flex flex-column new-post">
          <input
            className="new-post__input new-post__input--title"
            name="title"
            placeholder="Title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          <input
            className="new-post__input"
            name="author"
            placeholder="Author"
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
          {/* <select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
          >
          {categories.map(c => (
            <option value={c.name}>{c.name}</option>
            ))}
          </select> */}
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
          <textarea
            className="new-post__input"
            name="body"
            placeholder="Body"
            rows="20"
            value={body}
            onChange={({ target }) => setBody(target.value)}
          />
        </article>
      </form>
    </Fragment>
  )
}

export default connect(
  state => ({ categories: getCategories(state) }),
  dispatch => bindActionCreators({ savePost, loadCategories }, dispatch),
)(NewPost)
