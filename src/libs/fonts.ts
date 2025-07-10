import { Rubik_Bubbles } from 'next/font/google'
import localFont from 'next/font/local'

export const bubble = Rubik_Bubbles({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bubble',
})

export const d2 = localFont({
  src: '../fonts/D2Coding.ttf',
  display: 'swap',
  variable: '--font-d2',
})
