'use client'
import React from 'react'

import { usePathname } from 'next/navigation'

import { useLayout } from '../hooks'
import { LayoutClientProps } from '../layout.types'
import Background from './Background'
import Content from './Content'
import Header from './Header'
import Sidebar from './Sidebar'

const LayoutClient = ({ categories, children, content }: LayoutClientProps) => {
  const {
    title,
    viewMode,
    isMenuOpen,

    toggleMenu,
    toggleViewMode,

    goBack,
    goForward,
    goTo,
  } = useLayout()

  return (
    <Background>
      <Header
        title={title}
        viewMode={viewMode}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        toggleViewMode={toggleViewMode}
        goBack={goBack}
        goForward={goForward}
      />
      <Sidebar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        goTo={goTo}
        categories={categories}
        content={content}
      />
      <Content isMenuOpen={isMenuOpen}>{children}</Content>
    </Background>
  )
}

export default LayoutClient
