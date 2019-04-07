/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

import ButtonGroup, { ButtonGroupItem } from 'components/ButtonGroup'
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
  vote = () => {},
}) => (
  <article className="flex post" key={id}>
    <section className="flex flex-column flex-auto">
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
    </section>
    <aside className="flex flex-column items-center justify-center">
      <ButtonGroup direction="column">
        <ButtonGroupItem onClick={() => vote(id, 'upVote')}>
          like
        </ButtonGroupItem>
        <ButtonGroupItem onClick={() => vote(id, 'downVote')}>
          dislike
        </ButtonGroupItem>
      </ButtonGroup>
    </aside>
  </article>
)

export default Post
