'use client'
import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Category } from '@/libs/posts'
import { cn } from '@/libs/utils'

import { useIsVisibleNav } from './atoms'

export const displayNames: Record<string, string> = {
  'github-blog': '깃허브 블로그 제작',
  'html-css': 'HTML/CSS',
  frontend: '프론트엔드',
  react: '리액트',
}

export const NavigationClient = ({ categories }: { categories: Category[] }) => {
  const { isVisibleNav, setIsVisibleNav } = useIsVisibleNav()

  const closeNav = () => setIsVisibleNav(false)

  return (
    <>
      <AnimatePresence initial={false}>
        {isVisibleNav && (
          <>
            <motion.div
              key="sidebar-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'tween', duration: 0.3 }}
              onClick={closeNav}
              className={cn(
                'bg-background/50 fixed inset-0 z-40 transition-opacity duration-300',
                isVisibleNav ? 'flex' : 'hidden',
              )}
            />

            <motion.aside
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="flex lg:hidden lg:h-dvh"
            >
              <Nav categories={categories} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <aside className="hidden lg:flex lg:h-dvh">
        <Nav categories={categories} />
      </aside>
    </>
  )
}

const Nav = ({ categories }: { categories: Category[] }) => {
  const pathname = usePathname()

  return (
    <div className="bg-background border-primary/20 fixed z-50 h-dvh min-h-dvh w-64 overflow-y-scroll border-r px-8 py-12">
      {/* <div className="mb-12 flex w-full flex-col items-center">
        <div className="text-lg font-black">김단해</div>
        <div className="text-foreground/50 text-center text-sm">
          도전하는 것을 두려워하지 않는
          <br />
          프론트엔드 개발자입니다.
        </div>
      </div> */}

      <div className="mb-2 text-xs font-black">Category</div>
      <div className="flex flex-col gap-4">
        {categories.map((category) => {
          const current = pathname.includes(`/${category.key}/`)

          return (
            <Link
              href={`/category/${category.key}`}
              key={category.key}
              className="group flex cursor-pointer items-center justify-between"
            >
              <div
                className={cn(
                  'origin-left text-sm duration-300',
                  current
                    ? 'text-secondary font-extrabold'
                    : 'group-hover:text-primary group-hover:scale-110',
                )}
              >
                {category.name}
              </div>

              <div className="text-foreground/40 text-xs font-extrabold">{category.count}</div>
            </Link>
          )
        })}
      </div>

      <div className="mt-4 mb-2 text-xs font-black">About</div>
      <div className="mb-6 flex flex-col gap-4">
        <Link href="/about" className="group flex cursor-pointer items-center justify-between">
          <div
            className={cn(
              'origin-left text-sm duration-300',
              pathname.includes('/about')
                ? 'text-secondary font-extrabold'
                : 'group-hover:text-primary group-hover:scale-110',
            )}
          >
            제가 궁금하신가요?
          </div>

          <div className="text-foreground/40 material-symbols-rounded !text-[14px]">
            arrow_outward
          </div>
        </Link>
        <Link
          href="https://github.com/dandanae"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex cursor-pointer items-center justify-between"
        >
          <div className="group-hover:text-primary origin-left text-sm duration-300 group-hover:scale-110">
            깃허브 바로 가기
          </div>

          <div className="text-foreground/40 material-symbols-rounded !text-[14px]">
            arrow_outward
          </div>
        </Link>
      </div>
    </div>
  )
}
