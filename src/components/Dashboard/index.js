import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import Button from 'components/Button'
import ButtonGroup, { ButtonGroupItem } from 'components/ButtonGroup'
import Chip from 'components/Chip'
import Post from 'components/Post'
import Title from 'components/Title'

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
  const [sort, setSort] = useState('voteScore')
  const sortedPosts = _.orderBy(posts, [sort], ['desc'])

  useEffect(() => {
    loadCategories()
    loadPosts()
  }, [])

  return (
    <div className="dashboard">
      <header className="flex justify-between items-center">
        <Title>Readable</Title>
        <Button>New Post</Button>
      </header>
      <aside className="dashboard__categories">
        {categories.map(category => (
          <Chip key={category.name}>{category.name}</Chip>
        ))}
      </aside>
      <aside className="dashboard__sorts">
        <ButtonGroup>
          <ButtonGroupItem
            selected={sort === 'voteScore'}
            onClick={() => setSort('voteScore')}
          >
            Vote Score
          </ButtonGroupItem>
          <ButtonGroupItem
            selected={sort === 'timestamp'}
            onClick={() => setSort('timestamp')}
          >
            Date
          </ButtonGroupItem>
        </ButtonGroup>
      </aside>
      <main className="dashboard__posts">
        {sortedPosts.map(post => (
          <Fragment key={post.id}>
            <Post {...post} />
            <hr className="dashboard__separator" />
          </Fragment>
        ))}
      </main>
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
