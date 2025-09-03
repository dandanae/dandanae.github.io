import React from 'react'

import type { Metadata } from 'next'

import '@/styles/globals.css'
import { Header, Navigation } from '@/layouts'
import { bubble, d2 } from '@/libs/fonts'

import Providers from './providers'

export const metadata: Metadata = {
  title: "DASOM's Blog",
  description: "DASOM's Blog",
  authors: [{ name: 'DASOM' }],
  creator: 'DASOM',
  icons: {
    icon: '/ds-blog.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${bubble.variable} ${d2.variable}`} suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GYK5G4L4WZ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GYK5G4L4WZ');
            `,
          }}
        />
        <meta
          name="google-site-verification"
          content="QXc1oDCUaPnOPuGAxg8qpOyC_GnWZag6jVtHPzQDkwo"
        />
        <meta name="naver-site-verification" content="9c5c6606147b72ead338b3c4d676ff58d879a660" />
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
          <div className="grid-rows-[1fr auto] grid min-h-screen">
            <Header />
            <main className="mx-8 lg:m-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-[16rem_1fr_16rem] lg:gap-8">
              <Navigation />
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
