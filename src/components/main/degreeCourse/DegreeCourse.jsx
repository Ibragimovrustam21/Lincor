import React from 'react'
import './DegreeCourse.scss'

export const DegreeCourse = () => {
  return (
    <div className='mw degree-of-course'>
      <div className="degree-of-course-title">
        <h5>한국어 비디 <span>오</span>  수 <span>업</span></h5>
        <h5>Kares tili video <span>darsliklar</span>  to'plami</h5>
      </div>
      <div className="row">
        <div className="col-lg-4 degree-card-wrapper">
          <div className="degree-card">
            <div className="degree-card-title">
              <h2>01</h2>
              <h5><span>초급</span> Boshlang'ich <span>daraja</span></h5>
            </div>
            <div className="degree-card-body">
              <p>Boshlang`ich darajadagilar uchun
                darslar to`plami.<br />
                Umumiy darslar 25 tani tashkil qiladi.</p>
              <div className='degree-line'></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 degree-card-wrapper">
          <div className="degree-card degree-card-middle">
            <div className="degree-card-title">
              <h2>02</h2>
              <h5><span>중급</span>  O'rta <span>daraja</span> </h5>
            </div>
            <div className="degree-card-body">
              <p>Boshlang`ich darajadagilar uchun
                darslar to`plami.<br />
                Umumiy darslar 25 tani tashkil qiladi.</p>
              <div className='degree-line'></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 degree-card-wrapper">
          <div className="degree-card">
            <div className="degree-card-title">
              <h2>03</h2>
              <h5><span>고급</span> Yuqori <span>daraja</span></h5>
            </div>
            <div className="degree-card-body">
              <p>Boshlang`ich darajadagilar uchun
                darslar to`plami.<br />
                Umumiy darslar 25 tani tashkil qiladi.</p>
              <div className='degree-line'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
