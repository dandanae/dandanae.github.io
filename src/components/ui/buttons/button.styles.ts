import { tv } from 'tailwind-variants'

export const iconButtonVariants = tv({
  base: [
    'h-8 w-8 cursor-pointer items-center justify-center rounded-lg transition-all duration-300',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'active:scale-80',
  ],
  variants: {
    display: {
      mobile: 'flex md:hidden',
      desktop: 'hidden md:flex',
      all: 'flex',
    },
  },
})
