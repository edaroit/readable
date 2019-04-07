import React from 'react'

import { formatDate } from 'utils/formatter'

import './comment.scss'

const Comment = ({ author, timestamp, body }) => (
  <section className="comment">
    <div className="flex items-center comment__information">
      <span>{author}</span>
      <span>{formatDate(timestamp)}</span>
    </div>
    <div className="comment__body">{body}</div>
  </section>
)

export default Comment
