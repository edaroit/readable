import React from 'react'

import Chip from 'components/Chip'

import { formatDate } from 'utils/formatter'

import './post.scss'

const Post = ({ id, title, author, timestamp, category, body }) => (
  <article className="flex flex-column post" key={id}>
    <h3 className="post__title">{title}</h3>
    <div className="flex items-center">
      <div className="flex justify-between post__information">
        <span className="post__sub-title">{author}</span>
        <span className="post__sub-title">{formatDate(timestamp)}</span>
      </div>
      <div className="flex post__categories">
        <Chip key={category}>{category}</Chip>
      </div>
    </div>
    <div className="post__body">
      <span>{body}</span>
    </div>
  </article>
)

export default Post
