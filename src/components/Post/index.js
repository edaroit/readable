/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

import Chip from 'components/Chip'

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
  vote = () => {},
}) => (
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
    <span className="post__responses">{commentCount} Responses</span>
    <span className="post__responses">{voteScore}</span>
    <span onClick={() => vote(id, 'upVote')}>Like</span>
    <span onClick={() => vote(id, 'downVote')}>Dislike</span>
  </article>
)

export default Post
