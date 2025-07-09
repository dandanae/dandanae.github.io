import React from 'react'

import { tv } from 'tailwind-variants'

import { cn } from '@/libs/utils'

const Card = ({
  variant = 'secondary',
  classname,
  children,
}: {
  variant?: 'primary' | 'secondary'
  classname?: string
  children: React.ReactNode
}) => {
  const style = tv({
    base: 'relative w-full rounded-xl p-5 ring transition-all duration-300 hover:ring-2',
    variants: {
      variant: {
        primary: [
          'ring-primary/50 hover:ring-primary/70',
          'dark:ring-primary/30 dark:hover:ring-primary/50',
        ],
        secondary: [
          'ring-secondary/50 hover:ring-secondary/70',
          'dark:ring-secondary/30 dark:hover:ring-secondary/50',
        ],
      },
    },
  })
  return <div className={cn(style({ variant }), classname)}>{children}</div>
}

export default Card
