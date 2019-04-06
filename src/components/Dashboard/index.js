import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from 'components/Button'
import Chip from 'components/Chip'
import Post from 'components/Post'

import { loadCategories } from 'actions/categories'
import { loadPosts } from 'actions/posts'
import { getCategories } from 'selectors/categories'
import { getPosts } from 'selectors/posts'

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
          <Post {...post} />
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
