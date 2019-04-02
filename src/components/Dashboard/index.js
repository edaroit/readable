import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Chip from 'components/Chip'

import { loadCategories } from 'actions/categories'
import { getCategories } from 'selectors/categories'

const Dashboard = ({ loadCategories, categories = [] }) => {
  useEffect(() => {
    loadCategories()
  }, [])

  return (
    <div>
      {categories.map(category => (
        <Chip key={category.name}>{category.name}</Chip>
      ))}
    </div>
  )
}

export default connect(
  state => ({
    categories: getCategories(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        loadCategories,
      },
      dispatch,
    ),
)(Dashboard)
