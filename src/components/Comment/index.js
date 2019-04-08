import React from 'react'

import Vote from 'components/Vote'

import { formatDate } from 'utils/formatter'

import './comment.scss'

const Comment = ({ id, author, timestamp, body, voteScore, onVote }) => (
  <article className="flex comment">
    <section className="flex flex-column flex-auto">
      <div className="flex items-center comment__information">
        <span>{author}</span>
        <span>{formatDate(timestamp)}</span>
      </div>
      <div className="comment__body">{body}</div>
    </section>
    <Vote id={id} voteScore={voteScore} onVote={onVote} />
  </article>
)

export default Comment
