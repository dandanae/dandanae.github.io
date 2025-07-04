import React from 'react'

export interface LayoutProps {
  children: React.ReactNode
}

export interface LayoutClientProps {
  categories: any[]
  children: React.ReactNode
}

export interface BackgroundProps {
  children: React.ReactNode
}

export interface HeaderProps {
  title: string
  viewMode: 'grid' | 'list'
  isMenuOpen: boolean
  toggleMenu: () => void
  toggleViewMode: () => void
  goBack: () => void
  goForward: () => void
}

export interface SidebarProps {
  categories: string[]
  isMenuOpen: boolean
  toggleMenu: () => void
  goTo: (route: string) => void
}

export interface ContentProps {
  isMenuOpen: boolean
  children: React.ReactNode
}
