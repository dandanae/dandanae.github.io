import { PostPage } from '@/componets'
import { getAllPosts, getCategories } from '@/libs/posts'

const Home = async () => {
  const posts = await getAllPosts()
  const categories = await getCategories()

  return <PostPage posts={posts} categories={categories} />
}

export default Home
