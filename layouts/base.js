import Head from 'next/head'
import Link from 'next/link'
import HomeLayout, { introduce } from '../layouts/home'

const name = 'Yang Hyojeong'
export const siteTitle = 'Yang Hyojeong Blog'

const BaseLayout = ({ children }) => {
  return (
    <div className="window">
      <div className="title-bar">
        <button aria-label="Close" className="close"></button>
        <h1 className="title">{name}</h1>
        <button aria-label="Resize" className="resize"></button>
      </div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Yang Hyojeong Nextjs Test" />
        <meta name="og:title" content={siteTitle} />
        <link rel="stylesheet" href="https://unpkg.com/@sakun/system.css" />
      </Head>

      <div className="detail-bar">
        <ul role="menu-bar">
          <li role="menu-item">
            <Link href={'/'}>Home</Link>
          </li>
          <li role="menu-item">
            <Link href={'/about'}>About</Link>
          </li>
          <li role="menu-item">
            <Link href={'/posts'}>Posts</Link>
          </li>
        </ul>
      </div>
      <HomeLayout>
        <main>{children}</main>
      </HomeLayout>
    </div>
  )
}

export default BaseLayout
