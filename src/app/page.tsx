import React from 'react'

import { Finder } from '@/components'
import { getPosts } from '@/libs'

const Home = async () => {
  const posts = await getPosts()

  return <Finder title="home" posts={posts} />
}

export default Home
