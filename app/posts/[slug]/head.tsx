async function getPost(slug: any) {
  const result = await fetch('...')
  return result.json()
}

export default async function Head({ params }: any) {
  const post = await getPost(params.slug)

  return (
    <>
      <title>{post.title}</title>
    </>
  )
}
