'use client'
import React, { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { overlay } from 'overlay-kit'

import type { Toc } from '@/libs/posts'
import { cn } from '@/libs/utils'

const PostToc = ({ tocs }: { tocs: Toc[] }) => {
  const [tocIcon, setTocIcon] = useState<string>('menu')
  const [activeId, setActiveId] = useState<string | null>(null)

  const generateNumbering = (tocs: Toc[]) => {
    const counters: number[] = []
    return tocs.map((item) => {
      const depth = item.depth

      counters.length = depth
      counters[depth - 1] = (counters[depth - 1] || 0) + 1
      const numbering = counters.join('.')

      return { ...item, numbering }
    })
  }

  const numberedTocs = generateNumbering(tocs)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 1.0,
      },
    )

    const headingElements = window.document.querySelectorAll('h1, h2, h3')
    headingElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="hidden lg:col-start-3 lg:flex lg:h-dvh">
        <div className="bg-background border-primary/20 fixed z-40 h-dvh min-h-dvh w-64 overflow-y-scroll border-l px-8 py-12">
          <TocContent numberedTocs={numberedTocs} activeId={activeId} />
        </div>
      </div>

      <button
        aria-label="Open Table of Contents"
        onClick={() => {
          const EXIT_MS = 250 // exit 애니메이션 시간 (ms)

          if (tocIcon === 'menu') {
            // 열기
            setTocIcon('close')

            overlay.open(({ isOpen, close, unmount }) => (
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="toc-overlay"
                    className="bg-background border-primary/20 fixed right-4 bottom-14 z-50 h-2/3 w-2/3 overflow-x-hidden overflow-y-scroll rounded-lg border px-4 py-6 shadow-lg"
                    initial={{ opacity: 0, y: 16, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      y: 12,
                      scale: 0.98,
                      transition: { duration: EXIT_MS / 1000 },
                    }}
                  >
                    {/* 내부 닫기 버튼 제거 */}
                    <TocContent
                      numberedTocs={numberedTocs}
                      activeId={activeId}
                      close={() => {
                        close()
                        window.setTimeout(() => {
                          unmount()
                        }, 250)
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            ))
          } else {
            overlay.closeAll?.()
            window.setTimeout(() => {
              ;(setTocIcon('menu'), overlay.unmountAll?.())
            }, 250)
          }
        }}
        className="bg-background material-symbols-rounded border-primary/50 text-primary fixed right-4 bottom-4 z-50 flex h-8 w-8 items-center justify-center rounded-full border !text-lg shadow-lg lg:!hidden"
      >
        {tocIcon}
      </button>
    </>
  )
}

export default PostToc

const TocContent = ({
  numberedTocs,
  activeId,
  close,
}: {
  numberedTocs: Toc[]
  activeId: string | null
  close?: () => void
}) => {
  return (
    <>
      <div className="mb-2 text-xs font-black">Table Of Contents</div>
      <nav className="mb-24 flex flex-col space-y-2">
        {numberedTocs.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            rel="noopener noreferrer"
            className={cn(
              'origin-left text-sm transition-all',
              item.depth === 1 && 'font-semibold',
              item.depth === 2 && 'text-foreground/70 ml-4',
              item.depth === 3 && 'text-foreground/70 ml-8',
              activeId === item.id
                ? 'text-secondary scale-110 font-bold'
                : 'hover:text-primary hover:scale-110',
            )}
            onClick={() => close && close()}
          >
            {item.numbering}. {item.value}
          </Link>
        ))}
      </nav>
    </>
  )
}
