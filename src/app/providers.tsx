'use client'
import React from 'react'

import { ThemeProvider, ThemeProviderProps } from 'next-themes'

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" {...props} enableSystem>
      {children}
    </ThemeProvider>
  )
}

export default Providers
