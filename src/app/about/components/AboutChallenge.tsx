import React from 'react'

import { tv } from 'tailwind-variants'

const AboutChallenge = () => {
  return (
    <div className="flex w-full flex-col gap-5 pb-10">
      <div className="flex flex-col">
        <span className="text-2xl font-bold">도전해 본 기술들</span>
        <span className="text-foreground/70">2년 동안 다양한 기술에 도전하며 쌓은 경험</span>
      </div>

      <div className="flex gap-5">
        <TechCard
          title="주력 기술"
          items={['React', 'Next.js', 'Typescript', 'TailwindCSS', 'Framer motion']}
        />

        <TechCard
          title="도전 기술"
          items={['Flutter', 'AWS', 'Firebase', 'Docker', 'Vercel']}
          variants="secondary"
        />
      </div>
    </div>
  )
}

export default AboutChallenge

const style = tv({
  slots: {
    card: 'flex h-full w-1/2 flex-col items-center gap-5 rounded-lg px-2 pt-3 pb-5 ring',
    item: 'rounded-full px-3 py-0.5 text-sm font-semibold',
  },
  variants: {
    variants: {
      primary: { card: 'ring-primary/30', item: 'bg-primary/10 text-primary' },
      secondary: { card: 'ring-secondary/30', item: 'bg-secondary/10 text-secondary' },
    },
  },
})

const TechCard = ({
  title,
  items,
  variants = 'primary',
}: {
  title: string
  items: string[]
  variants?: 'primary' | 'secondary'
}) => {
  const styles = style({ variants })

  return (
    <div className={styles.card()}>
      <span className="text-lg font-semibold">{title}</span>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item) => (
          <div key={item} className={styles.item()}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
