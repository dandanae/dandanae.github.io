import React from 'react'

import type { Metadata } from 'next'

import { Header } from '@/layouts'

import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: "DANAE's Blog",
  description: "DANAE's Blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-site-verification" content="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js"
          integrity="sha384-dok87au0gKqJdxs7msEdBPNnKSRT+/mhTVzq+qOhcL464zXwvcrpjeWvyj1kCdq6"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Providers>
          <Header />
          <main className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-5">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
