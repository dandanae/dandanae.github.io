import React from 'react'

import type { Metadata } from 'next'
import './globals.css'

import { Layout } from '@/layouts'

export const metadata: Metadata = {
  title: 'DANAE BLOG',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>

      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
