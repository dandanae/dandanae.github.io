'use client'
import React from 'react'

import { cn } from '@/libs/client'

import { iconButtonVariants } from './button.styles'
import { IconButtonProps } from './button.types'

const IconButton = ({
  icon,
  ariaLabel,
  onClick,
  type = 'button',
  disabled = false,
  display = 'all',
  title,
  className,
}: IconButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      title={title ?? ariaLabel}
      className={cn(iconButtonVariants({ display }), className)}
    >
      <span className="material-symbols-rounded select-none" aria-hidden>
        {icon}
      </span>
    </button>
  )
}

export default IconButton
