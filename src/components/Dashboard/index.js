import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Card from 'components/Card'
import Chip from 'components/Chip'

import { loadCategories } from 'actions/categories'
import { loadPosts } from 'actions/posts'
import { getCategories } from 'selectors/categories'
import { getPosts } from 'selectors/posts'

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
    <div>
      {categories.map(category => (
        <Chip key={category.name}>{category.name}</Chip>
      ))}
      {posts.map(post => (
        <Card key={post.id}>{post.title}</Card>
      ))}
    </div>
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
