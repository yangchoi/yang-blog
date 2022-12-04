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
            <div className="personal-infomations">
              <p className="dialog-text">Email: yangchoi.hj@gmail.com</p>
              <Link href="https://github.com/yangchoi">
                <p className="dialog-text">GitHub: yangchoi</p>
              </Link>
              <Link href="https://www.linkedin.com/in/hyojeong-yang-879325147/">
                <p className="dialog-text">LinkedIn: Hyojoeng Yang</p>
              </Link>
            </div>
            <p className="dialog-text">&copy; 1984 Apple Computer</p>
          </div>
        </div>
      </body>
    </html>
  )
}
