import Link from 'next/link'

export default function Page() {
  return (
    <div className="alert-box outer-border scale-down">
      <div className="inner-border">
        <div className="alert-contents">
          <section className="field-row">
            <div className="square"></div>
            <p className="alert-text">
              <p>I am Yang Hyojeong aka YangChoi.</p>
              <p>I have worked alomost 2 years as Web Programmer</p>
              <p>Would you like to know me? </p>
            </p>
          </section>
          <section className="field-row">
            <button className="btn">Cancel</button>
            <Link href={'/about'}>
              <button className="btn">OK</button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
