import React from 'react'

import { cn } from '@/libs/client'

import { BackgroundProps } from '../layout.types'

const BG_URL =
  'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXhmYmNtcnBocXd0YWw0NjhxOHoxcnNkeHlmMmk1YXZyYjY3Zzl4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/46hpy8xB3MiHfruixn/giphy.gif'

const Background = ({ children }: BackgroundProps) => {
  return (
    <div
      className={cn(
        'relative flex h-screen min-h-screen w-full items-center justify-center bg-cover bg-center',
        `bg-[url(${BG_URL})]`,
      )}
    >
      {/* 배경 컬러 틴트 */}
      <div className="absolute inset-0 bg-violet-200/70 backdrop-blur-sm" />

      {/* 윈도우 */}
      <div className="relative m-auto flex h-full w-full overflow-clip rounded-3xl border border-violet-300 bg-white/60 shadow-lg shadow-violet-400/50 backdrop-blur-lg transition-all duration-500 sm:h-5/6 sm:w-3/4">
        {children}
      </div>
    </div>
  )
}

export default Background
