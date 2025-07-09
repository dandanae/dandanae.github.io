export const sortByCountDesc = (a: { count: number }, b: { count: number }) => b.count - a.count

export const sortByDateDesc = <T extends { metadata: { publishDate?: string } }>(a: T, b: T) =>
  new Date(b.metadata.publishDate ?? 0).getTime() - new Date(a.metadata.publishDate ?? 0).getTime()
