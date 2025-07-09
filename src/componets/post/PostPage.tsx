'use client'
import React, { useState } from 'react'

import { useMotionValueEvent, useScroll } from 'framer-motion'

import type { Category } from '@/libs/posts'

import PostCard from './PostCard'
import { Card } from '../common'
import PostCategory from './PostCategory'
import PostList from './PostList'

const PostPage = ({ posts, categories }: { posts: any; categories: any }) => {
  return (
    <>
      <PostCategory categories={categories} />
      <PostList title="최근 게시 글" posts={posts} />
    </>
  )
}

export default PostPage
