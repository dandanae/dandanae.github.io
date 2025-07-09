'use client'
import React, { useState } from 'react'

import { useMotionValueEvent, useScroll } from 'framer-motion'

import type { Category } from '@/libs/posts'

import PostCard from './PostCard'
import { Card } from '../common'

const PAGE_SIZE = 8

const PostPage = ({ posts, categories }: { posts: any; categories: any }) => {
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE)
  const [loading, setLoading] = useState<boolean>(false)

  const { scrollYProgress } = useScroll()

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
    <>
      <Card variant="primary" classname="ml-auto lg:w-2/3">
        <div className="flex flex-col gap-5">
          <div className="text-primary dark:bg-primary/40 text-center text-lg font-semibold">
            CATEGORY
          </div>
          {categories.map((category: Category) => (
            <div key={category.name} className="group flex cursor-pointer items-center gap-3">
              <span className="group-hover:text-secondary transition-all duration-300 group-hover:text-lg group-hover:font-medium">
                {category.name}
              </span>
              <div className="border-b-primary group-hover:border-b-secondary h-0 w-full border-b border-dashed transition-colors duration-300" />
              <span className="ring-primary/50 group-hover:ring-secondary/50 group-hover:bg-secondary/10 rounded-full px-4 py-1 text-xs ring transition-colors duration-300">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </Card>
      <div className="w-full lg:col-span-3">
        <h2 className="mb-8 text-3xl font-bold">최근 포스트</h2>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {posts.slice(0, visibleCount).map((post: any) => {
            return <PostCard key={post.slug} post={post} />
          })}

          <div className="mt-12 text-center">{loading && <p>로딩 중...</p>}</div>
        </div>
      </div>
    </>
  )
}

export default PostPage
