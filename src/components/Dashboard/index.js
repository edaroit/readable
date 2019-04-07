import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

const ALL = 'all'
const VOTE_SCORE = 'voteScore'
const TIMESTAMP = 'timestamp'
const ASC = 'asc'
const DESC = 'desc'

const verifyCategoryForPost = (post, category) => {
  if (category == null || category === ALL) return true
  return post.category === category
}

const Dashboard = ({
  loadCategories,
  loadPosts,
  categories = [],
  posts = [],
  match,
}) => {
  const [field, setField] = useState(VOTE_SCORE)
  const [order, setOrder] = useState(ASC)
  const [selectedCategory, setSelectedCategory] = useState(
    match.params.category || ALL,
  )
  const selectedPosts = _.chain(posts)
    .filter(post => verifyCategoryForPost(post, selectedCategory))
    .orderBy([field], [order])
    .value()

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
        <Link to="/">
          <Chip
            selected={selectedCategory === ALL}
            onClick={() => setSelectedCategory(ALL)}
          >
            all
          </Chip>
        </Link>
        {categories.map(category => (
          <Link to={`/${category.name}/posts`} key={category.name}>
            <Chip
              selected={selectedCategory === category.name}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </Chip>
          </Link>
        ))}
      </aside>
      <aside className="flex dashboard__sorts">
        <ButtonGroup>
          <ButtonGroupItem
            selected={field === VOTE_SCORE}
            onClick={() => setField(VOTE_SCORE)}
          >
            Vote Score
          </ButtonGroupItem>
          <ButtonGroupItem
            selected={field === TIMESTAMP}
            onClick={() => setField(TIMESTAMP)}
          >
            Date
          </ButtonGroupItem>
        </ButtonGroup>
        <ButtonGroup>
          <ButtonGroupItem
            selected={order === ASC}
            onClick={() => setOrder(ASC)}
          >
            Ascendent
          </ButtonGroupItem>
          <ButtonGroupItem
            selected={order === DESC}
            onClick={() => setOrder(DESC)}
          >
            Descendent
          </ButtonGroupItem>
        </ButtonGroup>
      </aside>
      <main className="dashboard__posts">
        {selectedPosts.map(post => (
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
