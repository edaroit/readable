import React from 'react'

import ButtonGroup, { ButtonGroupItem } from 'components/ButtonGroup'

const Vote = ({ id, voteScore, onVote }) => (
  <aside className="flex flex-column items-center justify-center">
    <ButtonGroup direction="column">
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
