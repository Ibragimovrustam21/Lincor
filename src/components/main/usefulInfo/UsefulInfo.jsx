import React from 'react'
import { Link } from 'react-router-dom'
import './usefulInfo.scss'

export const UsefulInfo = () => {
  return (
    <>
      <div className='row mw useful-info-wrapper'>
        <h4 className='useful-info-title'>Foydali ma’lumot</h4>
        <div className="col-lg-4">
          <div className="faqs">
            <div className="question-icon">?</div>
            <p className='useful-info-answer'>Javob</p>
            <h4 className='useful-info-subtitle'>
              Ko’p beriladigan savollar
            </h4>
            <Link to='/'>
              <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11L1 21" stroke="#000044" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Nega aynan bu kursni tanlashim kerak
            </Link>
            <Link to='/'>
              <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11L1 21" stroke="#000044" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Kursni tugatsam qanday kasb egasi  bo’laman
            </Link>
            <Link to='/'>
              <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11L1 21" stroke="#000044" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Kursni tugatsam qanday kasb egasi  bo’laman
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="faqs">
            <div className="question-icon">
              ?
            </div>
            <p className='useful-info-answer'>Javob</p>
            <h4 className='useful-info-subtitle'>
              Ko’p beriladigan savollar
            </h4>
            <Link to='/'>
              <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11L1 21" stroke="#000044" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Nega aynan bu kursni tanlashim kerak
            </Link>
            <Link to='/'>
              <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11L1 21" stroke="#000044" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Nega aynan bu kursni tanlashim kerak
            </Link>
            <Link to='/'>
              <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11L1 21" stroke="#000044" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Nega aynan bu kursni tanlashim kerak
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="faqs">
            <div className="question-icon">
              ?
            </div>
            <p className='useful-info-answer'>Javob</p>
            <h4 className='useful-info-subtitle'>
              Ko’p beriladigan savollar
            </h4>
            <Link to='/'>
              <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11L1 21" stroke="#000044" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Nega aynan bu kursni tanlashim kerak
            </Link>
            <Link to='/'>
              <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11L1 21" stroke="#000044" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Nega aynan bu kursni tanlashim kerak
            </Link>
            <Link to='/'>
              <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11L1 21" stroke="#000044" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Nega aynan bu kursni tanlashim kerak
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
