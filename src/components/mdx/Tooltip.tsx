'use client'
import React, { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { cn } from '@/libs/utils'

type TooltipProps = {
  word: string
  children: React.ReactNode
  title?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const tooltipPosition = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
}

const Tooltip: React.FC<TooltipProps> = ({ word, children, title, position = 'top' }) => {
  const [visible, setVisible] = useState(false)

  return (
    <span
      tabIndex={0}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      onTouchStart={() => setVisible((v) => !v)}
      onClick={() => setVisible((v) => !v)}
      className="hover:text-primary bg-primary/30 dark:bg-primary/20 relative m-0.5 inline-block cursor-pointer rounded-md px-2 text-sm font-semibold transition-colors duration-300"
    >
      {word} <span className="text-red-500">*</span>
      <AnimatePresence>
        {visible && (
          <motion.div
            id="tt"
            role="tooltip"
            className={cn(
              'bg-secondary/30 !text-foreground absolute z-50 flex max-w-lg flex-col rounded-lg px-3 py-2 text-sm font-normal shadow-lg backdrop-blur-2xl',
              tooltipPosition[position],
              'w-max max-w-[min(80vw,40rem)] break-keep whitespace-pre-line',
            )}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {title && <span className="text-base font-bold">{title}</span>}
            <div>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}

export default Tooltip
