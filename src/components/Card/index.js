import React from 'react'
import cn from 'classnames'

import './card.scss'

const Card = ({ children, direction = 'row' }) => (
  <div className={cn('card', 'flex', `flex-${direction}`)}>{children}</div>
)

export default Card
