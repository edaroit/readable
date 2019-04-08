import React from 'react'
import cn from 'classnames'

import './form-field.scss'

const FormField = ({
  as: Tag = 'input',
  className,
  name,
  placeholder,
  value,
  rows,
  onChange,
}) => (
  <Tag
    className={cn(
      'form-field',
      Tag === 'textarea' && 'form-field--text-area',
      className && className,
    )}
    name={name}
    placeholder={placeholder}
    value={value}
    rows={rows}
    onChange={onChange}
  />
)

export default FormField
