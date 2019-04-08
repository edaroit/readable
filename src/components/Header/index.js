import React from 'react'
import cn from 'classnames'

import Title from 'components/Title'

import './header.scss'

const Header = ({ buttons, justifyButtons = 'end' }) => (
  <header className="flex items-center justify-between header">
    <Title>readable</Title>
    <div className={cn('flex', `justify-${justifyButtons}`, 'header__buttons')}>
      {buttons}
    </div>
  </header>
)

export default Header
