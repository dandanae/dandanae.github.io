import React from 'react'

import { getCategories } from '@/libs'

import { LayoutClient } from './components'
import { LayoutProps } from './layout.types'

const Layout = async ({ children }: LayoutProps) => {
  const categories = await getCategories()

  return <LayoutClient categories={categories}>{children}</LayoutClient>
}

export default Layout
