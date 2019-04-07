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
  const [field, setField] = useState('voteScore')
  const [order, setOrder] = useState('asc')
  const orderedPosts = _.orderBy(posts, [field], [order])

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
      <aside className="flex dashboard__sorts">
        <div>
          <ButtonGroup>
            <ButtonGroupItem
              selected={field === 'voteScore'}
              onClick={() => setField('voteScore')}
            >
              Vote Score
            </ButtonGroupItem>
            <ButtonGroupItem
              selected={field === 'timestamp'}
              onClick={() => setField('timestamp')}
            >
              Date
            </ButtonGroupItem>
          </ButtonGroup>
        </div>
        <div>
          <ButtonGroup>
            <ButtonGroupItem
              selected={order === 'asc'}
              onClick={() => setOrder('asc')}
            >
              Ascendent
            </ButtonGroupItem>
            <ButtonGroupItem
              selected={order === 'desc'}
              onClick={() => setOrder('desc')}
            >
              Descendent
            </ButtonGroupItem>
          </ButtonGroup>
        </div>
      </aside>
      <main className="dashboard__posts">
        {orderedPosts.map(post => (
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
