import { getPosts } from '@/libs'

const page = async () => {
  const postList = await getPosts()

  console.log(postList)

  return null
}

export default page
