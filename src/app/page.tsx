import { PostCategory, PostList } from '@/componets'
import { getAllPosts, getCategories } from '@/libs/posts'

const Home = async () => {
  const posts = await getAllPosts()
  const categories = await getCategories()

  // const pinned = await getPinnedPosts()

  return (
    <>
      <PostCategory categories={categories} />
      {/* <PostList title="고정 게시 글" posts={pinned} isPinned /> */}
      <PostList title="최근 게시 글" posts={posts} />
    </>
  )
}

export default Home
