'use client'

import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { useTheme } from 'next-themes'

import { nextTheme } from '@/libs/utils'

import { useIsVisibleNav } from './atoms'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const { setIsVisibleNav } = useIsVisibleNav()

  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    const next = nextTheme(theme || 'light')
    setTheme(next)
  }

  const openNav = () => setIsVisibleNav(true)

  const getThemeIcon = () => {
    if (!mounted) return null
    return theme === 'dark' ? 'brightness_2' : 'wb_sunny'
  }

  return (
    <header className="bg-background/95 border-primary/20 sticky top-0 z-50 flex h-16 w-full items-center justify-center border-b backdrop-blur">
      {/* header-content */}
      <div className="flex w-full max-w-6xl items-center justify-between px-12">
        {/* title */}
        <Link
          href="/"
          rel="noopener noreferrer"
          className="font-bubble text-primary hover:text-secondary click flex cursor-pointer items-center text-3xl"
        >
          DANAE
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/about"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-secondary click flex h-8 cursor-pointer items-center justify-center rounded-lg px-4 text-xs font-semibold text-white transition-colors duration-300"
          >
            제가 궁금하신가요?
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="border-primary/30 hover:bg-primary/20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border transition-colors duration-300"
          >
            <span className="material-symbols-rounded text-primary/70 !text-[18px]">
              {getThemeIcon()}
            </span>
          </button>
          <button
            type="button"
            onClick={openNav}
            className="border-primary/30 hover:bg-primary/20 visible flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border transition-colors duration-300 lg:hidden"
          >
            <span className="material-symbols-rounded text-primary/70 !text-[18px]">menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
