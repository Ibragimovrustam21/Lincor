import React from 'react'
import '../startMain/startMain.scss'
import player1 from '../../../img/Group 134.png'
import player2 from '../../../img/Group 137.png'
import player3 from '../../../img/Group 136.png'

export const StartMain = () => {
  return (
    <div className='row mw start-main'>
      <div className="col-lg-5 start-main-alert-wrapper">
        <div className="start-main-alert">
          <h4>우리의 온라인 수업은 본인에게 흥미를 줄 것이다</h4>
          <p>각 수업은 당신을 위해 준비되어 있습니다.시간을 설정하여 우리의 수업을 볼 수 있습니다. LinCor, 한국어를 함께 배우자</p>
        </div>
      </div>
      <div className="col-lg-2 start-main-play">
        <div className="start-main-play-icon">
          <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 14L11 7L0 0V14Z" fill="#333333" />
          </svg>
        </div>
        <p className='qollanma'>Qo`llanma</p>
      </div>
      <div className="col-lg-5 start-main-alert-wrapper justify-content-end">
        <div className="start-main-alert">
          <h4>우리의 온라인 수업은 본인에게 흥미를 줄 것이다</h4>
          <p>각 수업은 당신을 위해 준비되어 있습니다.시간을 설정하여 우리의 수업을 볼 수 있습니다. LinCor, 한국어를 함께 배우자</p>
        </div>
      </div>
      <div className='group-squad-gameplayer'>
        <img src={player3} className='small-player' alt="" />
        <img src={player1} className='normal-player' alt="" />
        <img src={player2} className='small-player' alt="" />
      </div>
    </div>
  )
}
