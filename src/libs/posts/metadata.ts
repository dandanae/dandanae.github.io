import { getAllPosts } from './posts'
import { displayNames, type Category, type Tag } from './types'
import { sortByCountDesc } from './utils'

const countOccurrences = <T>(
  items: T[],
  getKey: (item: T) => string | string[] | undefined,
): Record<string, number> => {
  const counts: Record<string, number> = {}

  items.forEach((item) => {
    const keys = getKey(item)
    if (!keys) return
    if (Array.isArray(keys)) {
      keys.forEach((key) => {
        counts[key] = (counts[key] || 0) + 1
      })
    } else {
      counts[keys] = (counts[keys] || 0) + 1
    }
  })

  return counts
}

export const getCategories = async (): Promise<Category[]> => {
  const posts = await getAllPosts()
  const counts = countOccurrences(posts, (post) => post.metadata.category)

  return Object.entries(counts)
    .map(([key, count]) => ({
      key,
      count,
      name: displayNames[key] ?? key,
    }))
    .sort((a, b) => b.count - a.count)
}

export const getTags = async (): Promise<Tag[]> => {
  const posts = await getAllPosts()
  const counts = countOccurrences(posts, (post) => post.metadata.tags)
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort(sortByCountDesc)
}
