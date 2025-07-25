import React from 'react'

import { tv } from 'tailwind-variants'

import { cn } from '@/libs/utils'

interface CalloutProps {
  type?: 'note' | 'warning' | 'tip' | 'error' | 'none'
  children: React.ReactNode
  customIcon?: React.ReactNode
}

const style = tv({
  base: 'relative mb-12 flex items-start gap-2 rounded-2xl border px-4',
  variants: {
    type: {
      note: 'border-sky-300 bg-sky-50/50 dark:bg-sky-700/10',
      warning: 'border-amber-300 bg-amber-50/50 dark:bg-amber-700/10',
      tip: 'border-lime-300 bg-lime-50/50 dark:bg-lime-700/10',
      error: 'border-red-300 bg-red-50/50 dark:border-red-900 dark:bg-red-700/10',
      none: 'border-zinc-300 bg-zinc-50/50 dark:bg-zinc-700/10',
    },
  },
  defaultVariants: {
    type: 'none',
  },
})

const defaultIcons: Record<string, React.ReactNode> = {
  note: <span className="material-symbols-rounded">info</span>,
  warning: <span className="material-symbols-rounded">warning</span>,
  tip: <span className="material-symbols-rounded">lightbulb</span>,
  error: <span className="material-symbols-rounded">error</span>,
}

const Callout = ({ type = 'none', children, customIcon }: CalloutProps) => {
  const icon = customIcon ?? defaultIcons[type]
  const iconClass = {
    note: 'text-sky-400 dark:text-sky-700',
    warning: 'text-amber-400 dark:text-amber-700',
    tip: 'text-lime-400 dark:text-lime-700',
    error: 'text-red-400 dark:text-red-700',
    none: 'text-zinc-400 dark:text-zinc-700',
  }[type]

  return (
    <div className={style({ type })}>
      <div className={cn('mt-5.5 select-none', iconClass)}>{icon}</div>
      <span>{children}</span>
    </div>
  )
}

export default Callout
