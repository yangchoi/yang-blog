import Link from 'next/link'

export default function HomePage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { id: string }
}) {
  return (
    <>
      <p>{params.slug}</p>
      <p>{searchParams.id}</p>
    </>
  )
}
