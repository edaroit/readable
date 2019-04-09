import React from 'react'

import Actions from 'components/Actions'
import Vote from 'components/Vote'

import { formatDate } from 'utils/formatter'

import './comment.scss'

const Comment = ({
  id,
  author,
  timestamp,
  body,
  voteScore,
  onVote,
  onEdit,
  onDelete,
}) => (
  <article className="flex flex-column comment">
    <div className="flex items-center comment__information">
      <span>{author}</span>
      <span>{formatDate(timestamp)}</span>
    </div>
    <div className="comment__body">{body}</div>
    <div className="flex justify-between">
      <Actions id={id} onEdit={onEdit} onDelete={onDelete} direction="row" />
      <Vote id={id} voteScore={voteScore} onVote={onVote} direction="row" />
    </div>
  </article>
)

export default Comment
