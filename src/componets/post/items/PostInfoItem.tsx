import React from 'react'

import { cn } from '@/libs/utils'

interface PostInfoItemProps {
  icon: string
  label: string
  reverse?: boolean
}

const PostInfoItem: React.FC<PostInfoItemProps> = ({ icon, label, reverse = false }) => {
  return (
    <span
      className={cn(
        'text-foreground/50 flex items-center justify-end gap-1 text-xs',
        reverse && 'flex-row-reverse',
      )}
    >
      <span>{label}</span>
      <span className="material-symbols-rounded !text-[16px]">{icon}</span>
    </span>
  )
}

export default PostInfoItem
