'use client'
import React, { useState } from 'react'

import { useMotionValueEvent, useScroll } from 'framer-motion'

import { displayNames, type PostSummary } from '@/libs/posts/types'

import PostCard from './PostCard'

const PAGE_SIZE = 8

const PostList = ({
  title,
  posts,
  isPinned = false,
}: {
  title: string
  posts: PostSummary[]
  isPinned?: boolean
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE)
  const [loading, setLoading] = useState<boolean>(false)

  const { scrollYProgress } = useScroll()

  const listTitle = displayNames[title] ?? title

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.9 && !loading && visibleCount < posts.length) {
      setLoading(true)
      window.setTimeout(() => {
        setVisibleCount((count) => Math.min(count + PAGE_SIZE, posts.length))
        setLoading(false)
      }, 500)
    }
  })

  return (
    <div className="lg:col-start-2">
      <h2 className="!mb-6 text-3xl font-bold">{listTitle}</h2>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {posts.slice(0, visibleCount).map((post: any) => {
          return <PostCard key={post.slug} post={post} />
        })}
      </div>

      {!isPinned && <div className="mt-12 text-center">{loading && <p>로딩 중...</p>}</div>}
    </div>
  )
}

export default PostList
