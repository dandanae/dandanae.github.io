'use client'
import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { ReactLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'
import { ThemeProvider, ThemeProviderProps } from 'next-themes'

const pageVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
}

const Providers: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const pathname = usePathname()

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.2,
        autoRaf: true,
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="system" {...props} enableSystem>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            variants={pageVariants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'tween', ease: 'easeInOut', duration: 1 }}
            className="h-full w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>

      <button
        type="button"
        onClick={scrollToTop}
        className="ring-primary text-primary hover:bg-secondary/20 hover:ring-secondary hover:text-secondary sticky bottom-12 left-full z-50 ml-auto flex -translate-x-12 cursor-pointer items-center rounded-full p-2 ring"
      >
        <span className="material-symbols-rounded">vertical_align_top</span>
      </button>
    </ReactLenis>
  )
}

export default Providers
