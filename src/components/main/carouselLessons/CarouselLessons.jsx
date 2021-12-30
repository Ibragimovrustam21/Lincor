import React from 'react'
import './carouselLessons.scss'
import Slider from "react-slick";


export const CarouselLessons = () => {
  let settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='row mw'>
      <div className="col-lg-10 offset-1 ">
        <h5 className='carousel-subtitle'>Imkoniyatdan unumli foydalaning</h5>
        <Slider {...settings}>
          <div className='carousel-lessons-wrapper'>
            <div className="row">
              <div className="col-lg-7 carousel-lessons-left">
                <p className='topic-degree-title'>Siz imkoniyatlaringizdan to’liq foydalanig</p>
                <h4 className='topic-degree-name'>Topik I darslar</h4>
                <p className='topic-degree-text'>Siz uchun tayyorlangan Topik darsliklari sizning yuqori daraja olishingizga yordam beradi.
                  Darsliklar malakali mutahasislar tomonidan tayyorlangan. </p>
              </div>
              <div className="col-lg-5 carousel-lessons-right">
                <div className='topic-img'>
                  <h4>Topic</h4>
                  <h4>I</h4>
                </div>
                <p className='topic-title'>Test of Proficiency in Korean</p>
                <button className='btn'>
                  시작
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12L12 16L16 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4 topic-score-wrapper">
                <p className='topic-score-number'>1 급</p>
                <div className="topic-score">
                  <h5 className='topic-score-title'>Video darslik</h5>
                  <div>
                    <p className='topic-score-ball'>score 25</p>
                    <p className='topic-score-percent'>0 %</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 topic-score-wrapper">
                <p className='topic-score-number'>1 급</p>
                <div className="topic-score">
                  <h5 className='topic-score-title'>Video darslik</h5>
                  <div>
                    <p className='topic-score-ball'>score 25</p>
                    <p className='topic-score-percent'>0 %</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 topic-score-wrapper">
                <p className='topic-score-number'>1 급</p>
                <div className="topic-score">
                  <h5 className='topic-score-title'>Video darslik</h5>
                  <div>
                    <p className='topic-score-ball'>score 25</p>
                    <p className='topic-score-percent'>0 %</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='carousel-lessons-wrapper'>
            <div className="row">
              <div className="col-lg-7 carousel-lessons-left">
                <p className='topic-degree-title'>Siz imkoniyatlaringizdan to’liq foydalanig</p>
                <h4 className='topic-degree-name'>Topik I darslar</h4>
                <p className='topic-degree-text'>Siz uchun tayyorlangan Topik darsliklari sizning yuqori daraja olishingizga yordam beradi.
                  Darsliklar malakali mutahasislar tomonidan tayyorlangan. </p>
              </div>
              <div className="col-lg-5 carousel-lessons-right">
                <div className='topic-img'>
                  <h4>Topic</h4>
                  <h4>I</h4>
                </div>
                <p className='topic-title'>Test of Proficiency in Korean</p>
                <button className='btn'>
                  시작
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12L12 16L16 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4 topic-score-wrapper">
                <p className='topic-score-number'>1 급</p>
                <div className="topic-score">
                  <h5 className='topic-score-title'>Video darslik</h5>
                  <div>
                    <p className='topic-score-ball'>score 25</p>
                    <p className='topic-score-percent'>0 %</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 topic-score-wrapper">
                <p className='topic-score-number'>1 급</p>
                <div className="topic-score">
                  <h5 className='topic-score-title'>Video darslik</h5>
                  <div>
                    <p className='topic-score-ball'>score 25</p>
                    <p className='topic-score-percent'>0 %</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 topic-score-wrapper">
                <p className='topic-score-number'>1 급</p>
                <div className="topic-score">
                  <h5 className='topic-score-title'>Video darslik</h5>
                  <div>
                    <p className='topic-score-ball'>score 25</p>
                    <p className='topic-score-percent'>0 %</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
