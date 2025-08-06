import React from 'react'

import { PostFooter, PostHeader, PostToc } from '@/components'
import { Code, HoverContainer, Link } from '@/components/mdx/code'
import { getPost, getSlugs, getTocBySlug } from '@/libs/posts'

interface ParamsProps {
  params: Promise<{ category: string; slug: string }>
}

export async function generateStaticParams() {
  const rawSlugs = await getSlugs()

  return rawSlugs.map((fullSlug) => {
    const [category, slug] = fullSlug.split(/[\\/]/)
    return { category, slug }
  })
}

export async function generateMetadata({ params }: ParamsProps) {
  const { category, slug } = await params
  const fullSlug = `${category}/${slug}`
  const { metadata } = await getPost(fullSlug)

  if (!metadata) {
    return { title: 'Post Not Found' }
  }

  return {
    title: metadata.title,
    description: metadata.description,
  }
}

const BlogPage = async ({ params }: ParamsProps) => {
  const { category, slug } = await params
  const fullSlug = `${category}/${slug}`
  const post = await getPost(fullSlug)
  const tocs = await getTocBySlug(fullSlug)

  if (!('Component' in post)) {
    return <div>포스트를 찾을 수 없습니다.</div>
  }

  const { metadata, prev, next, Component } = post

  return (
    <>
      <div className="w-full p-8 lg:col-start-2 lg:px-0">
        <PostHeader metadata={metadata} />

        <article className="prose dark:prose-invert mt-6 mb-24 w-full max-w-2xl">
          <Component components={{ HoverContainer, a: Link, Code }} />
        </article>

        <PostFooter prev={prev} next={next} />
      </div>

      <PostToc tocs={tocs || []} />
    </>
  )
}

export default BlogPage
