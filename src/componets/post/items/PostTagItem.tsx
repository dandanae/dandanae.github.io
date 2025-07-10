import React from 'react'

const PostTagItem = ({ tag }: { tag: string }) => {
  return (
    <span
      key={tag}
      className="ring-primary/50 text-foreground/70 rounded-full px-3 py-0.5 text-xs ring"
    >
      #{tag}
    </span>
  )
}

export default PostTagItem
