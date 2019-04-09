import React from 'react'
import cn from 'classnames'

import ButtonGroup, { ButtonGroupItem } from 'components/ButtonGroup'

const Actions = ({ id, onEdit, onDelete, direction = 'column' }) => (
  <aside
    className={cn(
      'flex',
      `flex-${direction}`,
      'items-center',
      direction === 'column' && 'justify-center',
    )}
  >
    <ButtonGroup direction={direction}>
      <ButtonGroupItem onClick={() => onEdit(id)}>edit</ButtonGroupItem>
      <ButtonGroupItem onClick={() => onDelete(id)}>delete</ButtonGroupItem>
    </ButtonGroup>
  </aside>
)

export default Actions
