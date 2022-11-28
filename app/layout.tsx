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
        <div className="window scale-down">
          <div className="title-bar">
            <button aria-label="Close" className="close"></button>
            <h1 className="title">{children}</h1>
            <button aria-label="Resize" disabled className="hidden"></button>
          </div>
          <div className="separator"></div>

          <div className="modeless-dialog">
            <section className="field-row">
              <label htmlFor="text_find" className="modeless-text">
                Find:
              </label>
              <input id="text_find" type="text" placeholder="" />
            </section>
            <section className="field-row">
              <button className="btn">Cancel</button>
              <button className="btn">Find</button>
            </section>
          </div>
        </div>
      </body>
    </html>
  )
}
