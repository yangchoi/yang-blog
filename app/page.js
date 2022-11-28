export default function Page() {
  return (
    <div className="alert-box outer-border scale-down">
      <div className="inner-border">
        <div className="alert-contents">
          <section className="field-row">
            <div className="square"></div>
            <p className="alert-text">
              This is Home. Inner Context is From page.js
            </p>
          </section>
          <section className="field-row">
            <button className="btn">Cancel</button>
            <button className="btn">OK</button>
          </section>
        </div>
      </div>
    </div>
  )
}
