import Link from 'next/link'

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>

      <Link href={'/'}>
        <button>go to Home page</button>
      </Link>
    </div>
  )
}

export default AboutPage
