'use clinet'
import React from 'react'

import { cn } from '@/libs/client'

import { SidebarProps } from '../layout.types'

const Sidebar = ({ categories, isMenuOpen, toggleMenu, goTo }: SidebarProps) => {
  return (
    <aside
      className={cn(
        'z-40 h-full w-full bg-gradient-to-r from-zinc-100 to-zinc-50 transition-all duration-300 md:w-1/4 lg:w-1/5',
        isMenuOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      {/* 닫기 버튼 */}
      <button
        type="button"
        onClick={toggleMenu}
        className="absolute top-2 right-2 scale-100 p-2 transition-all duration-300 active:scale-80 md:hidden"
      >
        <span className="material-symbols-rounded">close</span>
      </button>
      {/* 리스트 */}
      <ul className="flex flex-col p-4 pt-16">
        {/* 홈 */}
        <li
          onClick={() => goTo('/')}
          className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1 transition-all duration-300 hover:bg-violet-300"
        >
          <span className="material-symbols-rounded text-violet-600">home</span>
          <span className="text-sm font-semibold">HOME</span>
        </li>

        {/* 카테고리 */}
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => goTo(`/category/${category}`)}
            className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1 transition-all duration-300 hover:bg-violet-300"
          >
            <span className="material-symbols-rounded text-violet-600">folder</span>
            <span className="text-sm font-semibold">{category}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
