import { notFound } from 'next/navigation'

import { getPostBySlug, getSlugs } from '@/libs'

export async function generateStaticParams() {
  const slugs = await getSlugs()
  return slugs.map((slug: any) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: any }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
  }
}

export default async function BlogPost({ params }: { params: any }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const { Component } = post

  return (
    <article className="mx-auto max-w-4xl">
      <header className="mb-8">
        {post.metadata.categories && (
          <div className="mb-2 flex gap-2">
            {post.metadata.categories.map((category: string) => (
              <button
                key={category}
                type="button"
                className="rounded-full bg-violet-200 px-3 py-1 text-xs font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        )}
        <h1 className="text-4xl font-extrabold">{post.metadata.title}</h1>
        <div className="mb-4">{post.metadata.description}</div>
        <div className="flex items-center gap-4 text-sm opacity-50">
          <div className="flex items-center gap-1">
            <span className="material-symbols-rounded !text-[18px]">calendar_today</span>
            <time dateTime={post.metadata.publishDate}>
              {new Date(post.metadata.publishDate).toLocaleDateString()}
            </time>
          </div>

          <div className="flex items-center gap-1">
            <span className="material-symbols-rounded !text-[18px]">avg_pace</span>
            <span>{Math.ceil(post.readingTime)} 분</span>
          </div>
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <Component />
      </div>
    </article>
  )
}
