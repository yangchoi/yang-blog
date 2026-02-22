"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="alert-box outer-border scale-down">
      <div className="inner-border">
        <div className="alert-contents">
          <section className="field-row">
            <div className="square"></div>
            <div className="alert-text">
              <p>I am Yang Hyojeong aka YangChoi.</p>
              <p>Software Engineer, 5+ years.</p>
              <p>Would you like to know me?</p>
            </div>
          </section>
          <section className="field-row">
            <button className="btn" onClick={() => setIsModalOpen(true)}>
              Cancel
            </button>
            {isModalOpen && (
              <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <p>WHY?</p>
                  <button onClick={() => setIsModalOpen(false)}>Close</button>
                </div>
              </div>
            )}
            <Link href={'/about'}>
              <button className="btn">OK</button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
