"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="home-container">
      <div className="home-greeting">
        <p className="home-name">Yang Hyojeong</p>
        <p className="home-aka">aka YangChoi</p>
        <div className="home-divider"></div>
        <p className="home-desc">Software Engineer.</p>
        <p className="home-question">Would you like to know me?</p>
      </div>
      <div className="home-actions">
        <button className="btn" onClick={() => setIsModalOpen(true)}>
          Cancel
        </button>
        <Link href={'/about'}>
          <button className="btn">OK</button>
        </Link>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="title-bar">
              <button aria-label="Close" className="close" onClick={() => setIsModalOpen(false)}></button>
              <h1 className="title">Alert</h1>
              <button aria-label="Resize" className="resize hidden"></button>
            </div>
            <div className="modal-dialog-body">
              <div className="inner">
                <p>WHY?</p>
                <section className="field-row">
                  <button className="btn" onClick={() => setIsModalOpen(false)}>
                    OK
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
