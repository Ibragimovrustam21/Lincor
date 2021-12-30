import React from 'react'
import '../sectionTitle/sectionTitle.scss'
import head from '../../../img/Head.png'
import head2 from '../../../img/Head (1).png'

export const SectionTitle = ({ koreanT, uzbT, left = false }) => {
  let classNames = require('classnames');
  let sectionT = classNames({
    'col-lg-12 p-0': true,
    'section-title-wrapper': true,
    'section-title-left': left,
    'section-title-right': !left
  })

  return (
    <div className='row'>
      <div className={sectionT}>
        <div className="section-title">
          <h4 className='lang-korean'>{koreanT}</h4>
          <h4>{uzbT}</h4>
          <div className="head-player">
            {left ? <img src={head} alt="" /> : <img src={head2} alt="" />}
          </div>
        </div>
      </div>
    </div>
  )
}
