import React from 'react'
import cn from 'classnames'

import ButtonGroup, { ButtonGroupItem } from 'components/ButtonGroup'

const Vote = ({ id, voteScore, onVote, direction = 'column' }) => (
  <aside
    className={cn(
      'flex',
      `flex-${direction}`,
      'items-center',
      direction === 'column' && 'justify-center',
    )}
  >
    <ButtonGroup direction={direction}>
      <ButtonGroupItem onClick={() => onVote(id, 'upVote')}>
        like
      </ButtonGroupItem>
      <ButtonGroupItem selected>{voteScore}</ButtonGroupItem>
      <ButtonGroupItem onClick={() => onVote(id, 'downVote')}>
        dislike
      </ButtonGroupItem>
    </ButtonGroup>
  </aside>
)

export default Vote
