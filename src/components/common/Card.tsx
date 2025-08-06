import React from 'react'

import { tv } from 'tailwind-variants'

import { cn } from '@/libs/utils'

const Card = ({
  variant = 'secondary',
  className,
  children,
}: {
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
}) => {
  const style = tv({
    base: 'relative w-full rounded-xl p-5 ring transition-all duration-300 hover:ring-2',
    variants: {
      variant: {
        primary: [
          'ring-primary/20 hover:ring-primary/40',
          'dark:ring-primary/20 dark:hover:ring-primary/40',
        ],
        secondary: [
          'ring-secondary/50 hover:ring-secondary/70',
          'dark:ring-secondary/30 dark:hover:ring-secondary/50',
        ],
      },
    },
  })
  return <div className={cn(style({ variant }), className)}>{children}</div>
}

export default Card
