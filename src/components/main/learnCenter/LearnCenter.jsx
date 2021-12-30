import React from 'react'
import './learnCenter.scss'


export const LearnCenter = () => {
  return (
    <div className='row mw learn-center-wrapper'>
      <div className="col-lg-6 learn-center-info">
        <h4 className='learn-center-title'><span>O`</span>quv markazlari</h4>
        <p className='learn-center-text'>
          Bizga tegishli bo'lgan o'quv markazlarimizga tashrif buyuring biz sizlarni Koreya atmasferasiga olib kiramiz.
          Kares tili jamoasi bilan birgalikda tez va osson o'rganing.
        </p>
      </div>
      <div className="col-lg-6 learn-center-video">
        <div className="video-block">
          <div className="square-red"></div>
          <div className='video-play'>
            <div className="video-play-icon">
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0874 9.12958C17.7436 9.51642 17.7436 10.4657 17.0874 10.8525L2.02087 19.7338C1.35424 20.1267 0.513059 19.6461 0.513059 18.8723L0.513059 1.10982C0.513059 0.335995 1.35424 -0.144607 2.02087 0.248348L17.0874 9.12958Z" fill="#23BDEE" />
              </svg>
            </div>
          </div>
          <div className="square-blue"></div>
        </div>
      </div>
    </div>
  )
}
