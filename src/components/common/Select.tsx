'use client'

import React, { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/libs/utils'

export interface Option {
  value: string | number | boolean
  label: string
  emoji?: string
  description?: string
}

interface SelectProps {
  options: Option[]
  value: string | number | boolean
  onChange: (value: string | number | boolean) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

const Select = ({
  options,
  value,
  onChange,
  placeholder = '선택하세요',
  className = '',
  disabled = false,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const selectedOption = options.find((opt) => opt.value === value)

  const handleSelect = (optionValue: string | number | boolean) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`}>
      <motion.button
        className={cn(
          'border-primary/30 focus:border-primary flex min-h-9 w-full cursor-pointer items-center justify-between gap-3 rounded-lg border-2 px-2 py-1 text-sm transition-colors focus:outline-none',
          disabled && 'cursor-not-allowed opacity-50',
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        whileTap={!disabled ? { scale: 0.98 } : {}}
        disabled={disabled}
      >
        <div className="flex items-center gap-2">
          {selectedOption ? (
            <>
              {selectedOption.emoji && <span>{selectedOption.emoji}</span>}
              <span className="font-medium">{selectedOption.label}</span>
            </>
          ) : (
            <span className="text-foreground/50">{placeholder}</span>
          )}
        </div>

        <span
          className={cn(
            'material-symbols-rounded duration-300',
            isOpen ? 'rotate-180' : 'rotate-0',
          )}
        >
          arrow_drop_down
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-primary/20 bg-background absolute top-full right-0 left-0 z-50 mt-2 overflow-hidden rounded-lg border-2 text-sm shadow"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {options.map((option) => {
                const isSelected = option.value === value
                return (
                  <motion.button
                    key={String(option.value)}
                    className={cn(
                      'flex w-full cursor-pointer items-center gap-3 px-2 py-2 text-left transition-colors hover:bg-gray-50',
                      ` ${isSelected ? 'bg-primary/10 text-primary font-bold' : ''}`,
                    )}
                    onClick={() => handleSelect(option.value)}
                    variants={{
                      open: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: 'spring',
                          stiffness: 300,
                          damping: 24,
                        },
                      },
                      closed: {
                        opacity: 0,
                        x: -20,
                        transition: {
                          duration: 0.2,
                        },
                      },
                    }}
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option.emoji && <span className="text-sm">{option.emoji}</span>}
                    <div className="flex-1">
                      <span className="font-medium">{option.label}</span>
                      {option.description && (
                        <p className="text-foreground/50 mt-0.5 text-xs">{option.description}</p>
                      )}
                    </div>
                    {isSelected && (
                      <motion.div
                        className="bg-primary h-2 w-2 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Select
