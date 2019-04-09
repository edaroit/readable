import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/Button'
import Header from 'components/Header'

import './not-found-error.scss'

const NotFoundError = () => (
  <Fragment>
    <Header
      buttons={
        <Link to="/">
          <Button secondary>return</Button>
        </Link>
      }
    />
    <article className="flex flex-column items-center justify-center not-found-error">
      <h1 className="not-found-error__title">404 Not Found</h1>
      <section className="not-found-error__information">
        This post does not exist.
      </section>
    </article>
  </Fragment>
)

export default NotFoundError
