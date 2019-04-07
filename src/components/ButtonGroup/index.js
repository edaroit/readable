/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import cn from 'classnames'

import './button-group.scss'

export const ButtonGroupItem = ({ selected, onClick, children }) => (
  <div
    className={cn(
      'flex',
      'items-center',
      'justify-center',
      'button-group__item',
      selected && 'button-group__item--selected',
    )}
    onClick={onClick}
  >
    {children}
  </div>
)

const ButtonGroup = ({ className, children }) => (
  <div
    className={cn(
      'flex',
      'justify-between',
      'button-group',
      className && className,
    )}
  >
    {children}
  </div>
)

export default ButtonGroup
