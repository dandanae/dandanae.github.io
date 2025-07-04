'use client'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose m-auto w-full">
      <h1>Posts Layout1981</h1>
      {children}
    </div>
  )
}
