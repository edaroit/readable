import React from 'react'

import './button.scss'

const Button = ({ children, disabled, onClick, type = 'button' }) => (
  <button
    className="flex items-center button"
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
)

export default Button
