import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import Chip from 'components/Chip'
import Vote from 'components/Vote'

import { formatDate } from 'utils/formatter'

import './post.scss'

const Post = ({
  id,
  title,
  author,
  timestamp,
  category,
  body,
  commentCount,
  voteScore,
  compact = true,
  onVote = () => {},
}) => (
  <article className="flex post">
    <section className="flex flex-column flex-auto">
      <Link to={`${category}/${id}`}>
        <h3 className="post__title">{title}</h3>
      </Link>
      <div className="flex items-center">
        <div className="flex justify-between post__information">
          <span>{author}</span>
          <span>{formatDate(timestamp)}</span>
        </div>
        {compact && category && (
          <div className="flex post__category">
            <Chip key={category}>{category}</Chip>
          </div>
        )}
      </div>
      <div className={cn('post__body', compact && 'post__body--compact')}>
        {body}
      </div>
      {compact && (
        <span className="post__responses">{commentCount} Responses</span>
      )}
    </section>
    <Vote id={id} voteScore={voteScore} onVote={onVote} />
  </article>
)

export default Post
