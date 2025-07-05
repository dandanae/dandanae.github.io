'use client'
import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TOC = () => {
  const pathname = usePathname()
  const slug = pathname.startsWith('/blog/')
    ? pathname.split('/')[2] // "/blog/post1" => "post1"
    : null
  // useEffect(() => console.log(pathname), [])

  const [content, setContent] = useState('')

  useEffect(() => {
    if (!slug) return
    const url = `https://raw.githubusercontent.com/dandanae/dandanae.github.io/main/src/posts/${slug}.mdx`

    window
      .fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch')

        return res.text()
      })
      .then((text) => {
        setContent(text)
      })
    // .catch(console.error)
  }, [slug])

  const getHeadings = (source: string) => {
    const regex = /^(#|##|###) (.*$)/gim
    if (source.match(regex)) {
      return source.match(regex)?.map((heading: string) => ({
        text: heading.replace('#', '').replace('#', '>').replace('#', '>'),
        link: heading
          .replace('# ', '')
          .replace('#', '')
          .replace('#', '')
          .replace(/ /g, '-')
          .toLowerCase()
          .replace('?', ''),
        indent: heading.match(/#/g)?.length,
      }))
    }
    return []
  }

  const HeadingArr = getHeadings(content)

  if (!slug) return null

  return (
    <div>
      {HeadingArr?.map((heading, index) => (
        <div key={index}>
          <Link href={`/blog/${slug}#${heading.link}`}>{heading.text}</Link>
        </div>
      ))}
    </div>
  )
}

export default TOC
