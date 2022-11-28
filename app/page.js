export default function Page() {
  return (
    <div className="alert-box outer-border scale-down">
      <div className="inner-border">
        <div className="alert-contents">
          <section className="field-row">
            <div className="square"></div>
            <p className="alert-text">
              This is a standard alert box. The text would be placed here. This
              is where more text appears
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
