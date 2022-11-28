export default function Page({ params, searchParams }) {
  return (
    <>
      <p>{params.slug}</p>
      <p>{searchParams.id}</p>
    </>
  )
}
