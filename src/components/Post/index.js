import React from 'react'
import { Link } from 'react-router-dom'

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
  onVote = () => {},
}) => (
  <article className="flex post">
    <section className="flex flex-column flex-auto">
      <Link to={`${category}/${id}`}>
        <h3 className="post__title">{title}</h3>
      </Link>
      <div className="flex items-center">
        <div className="flex justify-between post__information">
          <span className="post__sub-title">{author}</span>
          <span className="post__sub-title">{formatDate(timestamp)}</span>
        </div>
        {category && (
          <div className="flex post__categories">
            <Chip key={category}>{category}</Chip>
          </div>
        )}
      </div>
      <div className="post__body">
        <span>{body}</span>
      </div>
      <span className="post__responses">{commentCount} Responses</span>
    </section>
    <Vote id={id} voteScore={voteScore} onVote={onVote} />
  </article>
)

export default Post
