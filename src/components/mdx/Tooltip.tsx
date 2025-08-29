'use client'
import React, { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { cn } from '@/libs/utils'

type TooltipProps = {
  word: string
  children: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip: React.FC<TooltipProps> = ({ word, children, position = 'top' }) => {
  const [visible, setVisible] = useState(false)

  const tooltipPosition = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }

  return (
    <span
      className="hover:text-primary bg-primary/30 dark:bg-primary/20 relative mx-1 inline-block cursor-pointer rounded-md px-2 font-semibold transition-colors duration-300"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible((v) => !v)}
      onTouchStart={() => setVisible((v) => !v)}
      tabIndex={0}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {word} <span className="text-red-500">*</span>
      <AnimatePresence>
        {visible && (
          <motion.span
            id="tt"
            role="tooltip"
            className={cn(
              'bg-secondary/30 !text-foreground absolute z-50 max-w-lg rounded-lg px-3 py-2 text-sm font-normal shadow-lg backdrop-blur-2xl',
              tooltipPosition[position],
              'w-max max-w-[min(80vw,40rem)] break-keep whitespace-pre-wrap',
            )}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}

export default Tooltip
