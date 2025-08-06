import React from 'react'

import { getCategories } from '@/libs/posts'

import { NavigationClient } from './Navigation.client'

const Navigation = async () => {
  const categories = await getCategories()

  return <NavigationClient categories={categories} />
}

export default Navigation
