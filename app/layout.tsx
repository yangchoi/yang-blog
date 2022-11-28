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
      <head></head>
      <body>
        <div className="window">
          <div className="title-bar">
            <button aria-label="Close" className="close"></button>
            <h1 className="title">YangHyojeong</h1>
            <button aria-label="Resize" className="resize"></button>
          </div>
          <div className="details-bar">
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

          <div className="window-pane">{children}</div>
          <div className="standard-dialog center scale-down">
            <h1 className="dialog-text">
              The Macintosh Finder, Version 1.0 (18 Jan 84)
            </h1>
            <p className="dialog-text">&copy; 1984 Apple Computer</p>
          </div>
        </div>
      </body>
    </html>
  )
}
