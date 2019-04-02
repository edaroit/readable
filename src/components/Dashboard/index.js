import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from 'components/Button'
import Card from 'components/Card'
import Chip from 'components/Chip'

import { loadCategories } from 'actions/categories'
import { loadPosts } from 'actions/posts'
import { getCategories } from 'selectors/categories'
import { getPosts } from 'selectors/posts'

import { formatDate } from 'utils/formatter'

import './dashboard.scss'

const Dashboard = ({
  loadCategories,
  loadPosts,
  categories = [],
  posts = [],
}) => {
  useEffect(() => {
    loadCategories()
    loadPosts()
  }, [])

  return (
    <main className="dashboard">
      <h1 className="dashboard__title">Readable</h1>
      <section className="flex justify-between dashboard__categories">
        {categories.map(category => (
          <Chip key={category.name}>{category.name}</Chip>
        ))}
      </section>
      <section className="flex justify-end dashboard__buttons">
        <Button>New Post</Button>
      </section>
      <section className="dashboard__posts">
        {posts.map(post => (
          <Card className="post" direction="column" key={post.id}>
            <h3 className="post__title">{post.title}</h3>
            <span className="post__sub-title">{post.author}</span>
            <span className="post__sub-title">
              {formatDate(post.timestamp)}
            </span>
            <span className="post__sub-title">{post.category}</span>
            <div className="post__body">
              <span>{post.body}</span>
            </div>
            <span>{post.voteScore} Vote Score</span>
          </Card>
        ))}
      </section>
    </main>
  )
}

export default connect(
  state => ({
    categories: getCategories(state),
    posts: getPosts(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        loadCategories,
        loadPosts,
      },
      dispatch,
    ),
)(Dashboard)
