import React, { useEffect, useRef } from 'react'

import { cn, useScrollAtom } from '@/libs/client'

import { ContentProps } from '../layout.types'

const Content = ({ isMenuOpen, children }: ContentProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const { setScroll } = useScrollAtom()

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const onScroll = () => {
      const scrollTop = el.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      const scrollRatio = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      setScroll(scrollRatio)
    }

    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [setScroll])

  return (
    <div
      ref={contentRef}
      className={cn(
        'absolute top-0 right-0 h-full w-full flex-1 overflow-y-auto px-4 pt-20 pb-8 transition-all duration-300',
        isMenuOpen && 'md:w-3/4 lg:w-4/5',
      )}
    >
      {children}
    </div>
  )
}

export default Content
