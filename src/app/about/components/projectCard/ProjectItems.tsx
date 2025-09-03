import { cn } from '@/libs/utils'
import { projectTags, ProjTag } from '@/projects/types'

type ContentHeaderProps = {
  tags: ProjTag[]
  title: string
  date: string
  subtitle: string
  challenge: string
  expanded?: boolean
}

const MAX_INLINE_TAGS = 3 // 한 줄에 보여줄 최대 태그 수

export const ContentHeader = ({
  tags,
  title,
  date,
  subtitle,
  challenge,
  expanded = false,
}: ContentHeaderProps) => {
  const isoDate = (() => {
    const m = date.trim().match(/^(\d{4})\.\s?(\d{2})\.\s?(\d{2})\.$/)
    if (!m) return undefined
    const [, y, mo, d] = m
    return `${y}-${mo}-${d}`
  })()

  return (
    <header className="flex flex-col justify-center" aria-labelledby="project-title">
      <TagList tags={tags} expanded={expanded} />

      <p className={cn('mt-2 text-xs', expanded ? 'text-white/50' : 'text-foreground/50')}>
        <time dateTime={isoDate}>{date}</time>
      </p>

      <p
        id="project-title"
        className={cn('m-0 p-0 text-xl font-bold', expanded ? 'text-white' : 'text-foreground')}
      >
        {title}
      </p>

      <p className={cn('my-2 text-sm', expanded ? 'text-white/70' : 'text-foreground/70')}>
        {subtitle}
      </p>

      <p className="text-primary text-sm font-semibold">
        <span aria-hidden>🎯 </span>
        <span className="sr-only">도전 과제: </span>
        {challenge}
        <span aria-hidden>에 도전했어요!</span>
      </p>
    </header>
  )
}

const TagList = ({ tags = [], expanded }: { tags?: string[]; expanded?: boolean }) => {
  if (tags.length === 0) return null

  const visibleTags = expanded ? tags : tags.slice(0, MAX_INLINE_TAGS)
  const hiddenTags = expanded ? [] : tags.slice(MAX_INLINE_TAGS)

  return (
    <div className={cn('flex flex-wrap gap-1', expanded && 'm-auto')}>
      {visibleTags.map((tag) => {
        const config = projectTags[tag as ProjTag]
        const colorClass = config?.color || 'bg-gray-100 text-gray-700'

        return (
          <span
            key={tag}
            className={cn(
              'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold',
              colorClass,
            )}
          >
            # {tag}
          </span>
        )
      })}

      {hiddenTags.length > 0 && (
        <div className="group relative z-40">
          <span className="bg-primary/20 text-primary inline-flex cursor-default items-center rounded-full px-3 py-1 text-xs font-semibold">
            + {hiddenTags.length}
          </span>
          <div className="ring-primary/30 bg-background absolute top-full mt-2 hidden w-fit max-w-xs min-w-32 flex-wrap gap-2 rounded-lg p-3 text-xs shadow ring-1 group-hover:flex">
            {hiddenTags.map((tag) => {
              const config = projectTags[tag as ProjTag]
              const colorClass = config?.color || 'bg-gray-100 text-gray-700'
              return (
                <span
                  key={tag}
                  className={cn(
                    'inline-flex items-center gap-1 rounded-full px-3 py-1 font-semibold',
                    colorClass,
                  )}
                >
                  # {tag}
                </span>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
