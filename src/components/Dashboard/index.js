import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import Button from 'components/Button'
import ButtonGroup, { ButtonGroupItem } from 'components/ButtonGroup'
import Chip from 'components/Chip'
import Header from 'components/Header'
import Post from 'components/Post'

import { loadCategories } from 'actions/categories'
import { loadPosts, votePost } from 'actions/posts'
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

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => (
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
      <Link to={`/${category.name}`} key={category.name}>
        <Chip
          selected={selectedCategory === category.name}
          onClick={() => setSelectedCategory(category.name)}
        >
          {category.name}
        </Chip>
      </Link>
    ))}
  </aside>
)

const Sorts = ({ field, setField, order, setOrder }) => (
  <aside className="flex dashboard__sorts">
    <ButtonGroup>
      <ButtonGroupItem
        selected={field === VOTE_SCORE}
        onClick={() => setField(VOTE_SCORE)}
      >
        vote score
      </ButtonGroupItem>
      <ButtonGroupItem
        selected={field === TIMESTAMP}
        onClick={() => setField(TIMESTAMP)}
      >
        date
      </ButtonGroupItem>
    </ButtonGroup>
    <ButtonGroup>
      <ButtonGroupItem selected={order === ASC} onClick={() => setOrder(ASC)}>
        ascendent
      </ButtonGroupItem>
      <ButtonGroupItem selected={order === DESC} onClick={() => setOrder(DESC)}>
        descendent
      </ButtonGroupItem>
    </ButtonGroup>
  </aside>
)

const Posts = ({ posts, onVote }) =>
  posts.map(post => (
    <Fragment key={post.id}>
      <Post {...post} onVote={onVote} />
      <hr className="dashboard__separator" />
    </Fragment>
  ))

const Dashboard = ({
  loadCategories,
  loadPosts,
  votePost,
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
      <Header
        buttons={
          <Link to="/new">
            <Button>new post</Button>
          </Link>
        }
      />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Sorts
        field={field}
        setField={setField}
        order={order}
        setOrder={setOrder}
      />
      <main className="dashboard__posts">
        <Posts posts={selectedPosts} onVote={votePost} />
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
        votePost,
      },
      dispatch,
    ),
)(Dashboard)
