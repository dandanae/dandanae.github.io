'use client'
import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import { cn } from '@/libs/utils'

interface TocItem {
  id: string
  value: string
  depth: number
}

export default function TableOfContents({ tocs }: { tocs: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null)

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
    <div className="ring-primary bg-primary/10 dark:ring-primary/50 dark:bg-primary/5 sticky top-24 space-y-6 rounded-xl p-4 ring transition-all duration-300 hover:ring-2">
      <div>
        <div className="text-lg font-extrabold">목차</div>
        <nav className="flex flex-col space-y-2">
          {tocs.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'hover:text-primary text-sm transition-all',
                item.depth === 1 && 'font-semibold',
                item.depth === 2 && 'text-foreground/70 ml-4',
                item.depth === 3 && 'text-foreground/70 ml-8',
                activeId === item.id && 'text-secondary text-lg font-bold',
              )}
            >
              {item.value}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
