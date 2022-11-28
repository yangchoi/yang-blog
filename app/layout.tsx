import Link from 'next/link'
import './global.css'
import '@sakun/system.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <div className="window">
        <div className="title-bar">
          <button aria-label="Close" className="close"></button>
          <h1 className="title">Yang Hyojeong</h1>
          <button aria-label="Resize" className="resize"></button>
        </div>
        <nav>
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
        </nav>
        <body>{children}</body>
      </div>
    </html>
  )
}
