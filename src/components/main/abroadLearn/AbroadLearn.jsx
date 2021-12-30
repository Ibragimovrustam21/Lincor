import React from 'react'
import './abroadLearn.scss'
import img from '../../../img/image 13.png'

export const AbroadLearn = () => {
  return (
    <div className='row mw abroad-learn-wrapper'>
      <div className="col-lg-5 abroad-learn-img">
        <div className='abroad-tag'>Kursni tugatib</div>
        <h4 className='abroad-title'>Endi Koreyaga yo’l olamiz</h4>
        <img src={img} alt="" />
        <div className="fly-to-abroad">
          <div className='fly-to-abroad-block'>
            <svg width="90" height="77" viewBox="0 0 90 77" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_265_13825)">
                <path d="M73.7472 18.8766L32.0174 21.9806C30.2593 22.1113 28.7512 23.2057 28.0815 24.8364C27.4119 26.4672 27.7157 28.3057 28.8744 29.6342L38.0259 40.1265L53.0616 32.5349C53.7535 32.1855 54.5977 32.4632 54.9471 33.1552C55.2964 33.847 55.0188 34.6912 54.3268 35.0406L39.2911 42.6323L42.3006 56.2256C42.6817 57.9469 43.9806 59.2829 45.6905 59.7122C47.4038 60.1423 49.1783 59.5752 50.3254 58.2406L77.5986 26.5045C78.8404 25.0595 79.0783 23.1054 78.2196 21.4047C77.3609 19.704 75.6472 18.7352 73.7472 18.8766Z" fill="#41BE90" />
              </g>
              <line x1="9.52338" y1="48.1227" x2="29.3219" y2="38.1263" stroke="#41BE90" strokeWidth="2.73088" strokeLinecap="round" />
              <line x1="18.955" y1="49.7985" x2="31.9116" y2="43.2566" stroke="#FBA333" strokeWidth="2.73088" strokeLinecap="round" />
              <line x1="27.5331" y1="51.9079" x2="34.503" y2="48.3887" stroke="#41BE90" strokeWidth="2.73088" strokeLinecap="round" />
              <defs>
                <clipPath id="clip0_265_13825">
                  <rect width="47.9037" height="47.9037" fill="white" transform="translate(24.6621 21.6152) rotate(-26.7895)" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <p className='fly-to-abroad-title'>Kursni tugat va Koreya sen uchun</p>
        </div>
      </div>
      <div className="col-lg-7 abroad-learn-info">
        <h4 className='abroad-info-title'>Koreyada o`qish</h4>
        <p className='abroad-info-text'>Koreyada o’qishni hohlaysizmi?
          Unda hoziroq bizga murojat qiling.
          Sizninig kelajagingiz Koreya orqali yaralishi mumkun .
          Orzuingizdagi universitetlar sizni kutmoqda. </p>
        <div className='w-100 d-flex justify-content-center'>
          <div className='abroad-tag'>Batafsil</div>
        </div>
      </div>
    </div>
  )
}
