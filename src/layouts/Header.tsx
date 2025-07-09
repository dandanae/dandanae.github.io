'use client'

import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import { cn, nextTheme } from '@/libs/utils'

const Header = () => {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const next = nextTheme(theme || 'light')
    setTheme(next)
  }

  const getIcon = () => {
    if (!mounted) return null
    return theme === 'dark' ? 'brightness_2' : 'wb_sunny'
  }

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full backdrop-blur">
      <div className="relative container m-auto flex h-16 items-center justify-center">
        <Link
          href="/"
          className="font-bubble text-primary hover:text-secondary click absolute left-4 flex cursor-pointer items-center text-3xl font-black transition-colors duration-300"
        >
          DANAE
        </Link>
        <nav className="bg-secondary/20 dark:ring-secondary/30 relative flex h-9 w-40 items-center rounded-full px-0.5 text-sm font-medium dark:bg-transparent dark:ring">
          <motion.div
            className="bg-primary dark:bg-primary/70 absolute h-8 w-[78px] rounded-full"
            layout
            animate={{ x: index === 0 ? 0 : 78 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          />
          <Link
            href="/"
            onClick={() => setIndex(0)}
            className={cn(
              'click z-10 flex w-20 justify-center text-center transition-transform duration-300',
              index === 0 && 'font-bold',
            )}
          >
            BLOG
          </Link>
          <Link
            href="/about"
            onClick={() => setIndex(1)}
            className={cn(
              'click z-10 flex w-20 justify-center text-center',
              index === 1 && 'font-bold',
            )}
          >
            ABOUT
          </Link>
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          className="click absolute right-4 flex cursor-pointer items-center"
        >
          <span className="material-symbols-rounded">{getIcon()}</span>
        </button>
      </div>
    </header>
  )
}

export default Header
