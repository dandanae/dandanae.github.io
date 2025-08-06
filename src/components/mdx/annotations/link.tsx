import { AnnotationHandler } from 'codehike/code'

export const link: AnnotationHandler = {
  name: 'link',
  Inline: ({ annotation, children }) => {
    const { query } = annotation
    return (
      <a
        href={query}
        target="_blank"
        rel="noopener noreferrer"
        className="border-primary hover:bg-primary/20 cursor-pointer border-b border-dashed transition-colors duration-300"
      >
        {children}
      </a>
    )
  },
}
