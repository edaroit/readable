import React from 'react'
import cn from 'classnames'

import './button.scss'

const Button = ({
  children,
  disabled,
  primary = true,
  secondary = false,
  onClick,
  type = 'button',
}) => (
  <button
    className={cn(
      'flex',
      'items-center',
      'button',
      primary && 'button--primary',
      secondary && 'button--secondary',
    )}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
)

export default Button
