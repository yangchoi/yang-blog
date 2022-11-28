import Link from 'next/link'

const PostsPage = () => {
  return (
    <div>
      <h1>Posts</h1>

      <Link href={'/'}>
        <button>go to home page</button>
      </Link>
    </div>
  )
}

export default PostsPage
