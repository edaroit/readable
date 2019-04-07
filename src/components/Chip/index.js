/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import cn from 'classnames'

import './chip.scss'

const Chip = ({ children, selected, onClick }) => (
  <div className={cn('chip', selected && 'chip--selected')} onClick={onClick}>
    {children}
  </div>
)

export default Chip
