import React from 'react'

import { PostToc } from '@/componets'
import { getPost, getSlugs, getTocBySlug } from '@/libs/posts'

interface ParamsProps {
  params: Promise<{ category: string; slug: string }>
}

export async function generateStaticParams() {
  const rawSlugs = await getSlugs()

  return rawSlugs.map((fullSlug) => {
    const [category, slug] = fullSlug.split('/')
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

const Blog = async ({ params }: ParamsProps) => {
  const { category, slug } = await params
  const fullSlug = `${category}/${slug}`

  if (!fullSlug) {
    return <div>포스트를 찾을 수 없습니다.</div>
  }

  const tocs = await getTocBySlug(fullSlug)

  return (
    <>
      <div className="lg:col-span-1">
        <PostToc tocs={tocs || []} />
      </div>
      <div className="prose dark:prose-invert mt-4 max-w-none">
        {slug}
        {/* <Component /> */}
      </div>
    </>
    // <div className="container m-auto flex justify-center px-5 py-8">
    //   <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
    //
    //
    //
    //     <div className="lg:col-span-3">
    //       <Link href="/" className="group no-underline">
    //         <div className="group-hover:text-primary flex w-fit items-center rounded-xl transition-colors duration-300">
    //           <span className="material-symbols-rounded !text-[18px]">arrow_back_ios</span>
    //           <span>홈으로 돌아가기</span>
    //         </div>
    //       </Link>
    //       <div className="my-4 space-x-2">
    //         {metadata.categories &&
    //           metadata.categories.map((category: string) => (
    //             <span key={category} className="bg-primary/50 rounded-full px-2 py-1 text-xs">
    //               {category}
    //             </span>
    //           ))}
    //       </div>
    //       <h1 className="mb-4 text-4xl leading-tight font-bold md:text-5xl">{metadata.title}</h1>
    //       <div className="bg-secondary/20 mb-6 rounded-xl p-4 leading-relaxed">
    //         <b>이 글에 대하여</b>
    //         <div className="mb-2 flex items-center gap-2 text-xs opacity-60">
    //           <div className="flex space-x-1">
    //             <span className="material-symbols-rounded !text-[16px]">calendar_today</span>
    //             <span>{dayjs(metadata.publishDate).format('YYYY. MM. DD.')}</span>
    //           </div>
    //           <div className="flex space-x-1">
    //             <span className="material-symbols-rounded !text-[16px]">avg_pace</span>
    //             <span>{Math.ceil(readingTime)} 분</span>
    //           </div>
    //         </div>
    //         <p>{metadata.description}</p>
    //       </div>

    //       <div className="prose dark:prose-invert mt-4 max-w-none">
    //         <Component />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Blog
