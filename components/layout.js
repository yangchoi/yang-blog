import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Yang Hyojeong'
export const siteTitle = 'Yang Blog'

const Layout = ({ children, home }) => {
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
            <Link href="/posts/post-lists">Posts</Link>
          </li>
          <li role="menu-item">
            <Link href="/abouts/abouts">Abouts</Link>
          </li>
        </ul>
      </div>
      <div className="window-pane">
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />
              <div className="standard-dialog">Yang Hyojeong</div>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt=""
                  />
                </a>
              </Link>
            </>
          )}
        </header>
      </div>
      <main>{children}</main>
      {!home && (
        <div className=".standard-dialog">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Layout
