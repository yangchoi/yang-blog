"use client";

import Link from 'next/link'
import React, { useState } from 'react';

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="alert-box outer-border scale-down">
      <div className="inner-border">
        <div className="alert-contents">
          <section className="field-row">
            <div className="square"></div>
            <p className="alert-text">
              <p>I am Yang Hyojeong aka YangChoi.</p>
              <p>I am working as a Web Programmer</p>
              <p>Would you like to know me?</p>
            </p>
          </section>
          <section className="field-row">
            <button className="btn" onClick={openModal}>Cancel</button>
            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>&times;</span>
                  <p>WHY?</p>
                  <button onClick={closeModal}>Close</button>
                </div>
              </div>
            )}
            <style jsx>{`
              .modal {
                position: fixed;
                z-index: 1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgb(0, 0, 0); /* Fallback color */
                background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
              }
              .modal-content {
                background-color: #fefefe;
                margin: 15% auto; /* 15% from the top and centered */
                padding: 20px;
                border: 1px solid #888;
                width: 80%; /* Could be more or less, depending on screen size */
              }
              .close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
              }
              .close:hover,
              .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
              }
              .btn {
                /* Add styles for your button */
              }
            `}</style>

            <Link href={'/about'}>
              <button className="btn">OK</button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Page;
