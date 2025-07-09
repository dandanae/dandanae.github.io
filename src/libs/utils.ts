import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const nextTheme = (current: string) => {
  return current === 'light' ? 'dark' : 'light'
}
