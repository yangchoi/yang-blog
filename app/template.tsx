import Link from 'next/link'

export default function Template({ children }: { children: React.ReactNode }) {
  // return (
  //   <div className="window">
  //     <div className="title-bar">
  //       <button aria-label="Close" className="close"></button>
  //       <h1 className="title">template layout</h1>
  //       <button aria-label="Resize" className="resize"></button>
  //     </div>
  //     <div className="detail-bar">
  //       <ul role="menu-bar">
  //         <li role="menu-item">
  //           <Link href={'/'}>Home</Link>
  //         </li>
  //         <li role="menu-item">
  //           <Link href={'/about'}>About</Link>
  //         </li>
  //         <li role="menu-item">
  //           <Link href={'/posts'}>Posts</Link>
  //         </li>
  //       </ul>
  //     </div>
  //     <div className="window-pane">{children}</div>
  //   </div>
  // )
}
