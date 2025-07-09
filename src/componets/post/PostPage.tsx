import React from 'react'

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
