import { PostCategory, PostList } from '@/components'
import { getAllPosts } from '@/libs/posts'

const Home = async () => {
  const posts = await getAllPosts()
  // const pinned = await getPinnedPosts()

  return (
    <>
      {/* <PostCategory /> */}
      {/* <PostList title="고정 게시 글" posts={pinned} isPinned /> */}
      <PostList title="최근 게시 글" posts={posts} />
    </>
  )
}

export default Home
