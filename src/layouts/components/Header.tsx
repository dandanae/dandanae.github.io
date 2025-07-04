'use client'
import React from 'react'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import { IconButton } from '@/components'
import { cn, useScrollAtom } from '@/libs/client'

import { HeaderProps } from '../layout.types'

const Header = ({
  title,
  viewMode,
  isMenuOpen,
  toggleMenu,
  toggleViewMode,
  goBack,
  goForward,
}: HeaderProps) => {
  const pathname = usePathname()
  const { scroll } = useScrollAtom()

  return (
    <>
      {/* 상단바 */}
      <div className="absolute inset-0 z-30 h-12 w-full bg-white/70 backdrop-blur-lg" />
      <motion.div
        className="absolute top-12 left-0 z-30 h-[2px] bg-violet-500"
        style={{
          width: `${scroll * 100}%`,
        }}
        initial={{ width: 0 }}
        animate={{ width: `${scroll * 100}%` }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      />

      {/* 좌측 버튼 세 개 */}
      <div className="absolute top-0 left-5 z-50 flex h-12 cursor-not-allowed items-center gap-2 select-none">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      {/* 버튼 + 제목 */}
      <div
        className={cn(
          'absolute z-30 ml-2 flex h-12 items-center gap-3 transition-all duration-300',
          isMenuOpen ? 'right-4 md:left-1/4 lg:left-1/5' : 'left-24',
        )}
      >
        {/* 메뉴 토글 버튼 */}
        <IconButton
          icon="view_list"
          ariaLabel="menu toggle button"
          onClick={toggleMenu}
          display="desktop"
          className={['hover:bg-violet-200 active:bg-violet-200', isMenuOpen && 'bg-violet-300']}
        />

        {/* 뒤로가기 */}
        <IconButton
          icon="chevron_left"
          ariaLabel="menu toggle button"
          onClick={goBack}
          display="desktop"
          className={'hover:bg-violet-200 active:bg-violet-200'}
        />

        {/* 앞으로가기 */}
        <IconButton
          icon="chevron_right"
          ariaLabel="menu toggle button"
          onClick={goForward}
          display="desktop"
          className={'hover:bg-violet-200 active:bg-violet-200'}
        />

        {/* 뷰 모드 변경, /blog일 때 안 보임 */}
        {!pathname.startsWith('/blog') && (
          <IconButton
            icon={viewMode === 'grid' ? 'list_alt' : 'dataset'}
            ariaLabel="menu toggle button"
            onClick={toggleViewMode}
            display="all"
            className={'hover:bg-violet-200 active:bg-violet-200'}
          />
        )}
        <span className="font-bold">{title}</span>
      </div>
    </>
  )
}

export default Header
