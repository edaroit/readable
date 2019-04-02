import React from 'react'
import cn from 'classnames'

import './card.scss'

const Card = ({ children, className, direction = 'row' }) => (
  <div
    className={cn('card', 'flex', `flex-${direction}`, className && className)}
  >
    {children}
  </div>
)

export default Card
