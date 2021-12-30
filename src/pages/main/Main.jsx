import React from 'react'
import { AbroadLearn } from '../../components/main/abroadLearn/AbroadLearn'
import { CarouselLessons } from '../../components/main/carouselLessons/CarouselLessons'
import { DegreeCourse } from '../../components/main/degreeCourse/DegreeCourse'
import { LearnCenter } from '../../components/main/learnCenter/LearnCenter'
import { SectionTitle } from '../../components/main/sectionTitle/SectionTitle'
import { StartMain } from '../../components/main/startMain/StartMain'
import { UsefulInfo } from '../../components/main/usefulInfo/UsefulInfo'

export const Main = () => {
  return (
    <>
      <StartMain />
      <DegreeCourse />
      <SectionTitle uzbT={'Topik'} koreanT={'학습 센터'} />
      <CarouselLessons />
      <SectionTitle uzbT={'O`quv markazlari'} koreanT={'학습 센터'} left={true} />
      <LearnCenter />
      <SectionTitle uzbT={'Konsalting'} koreanT={'컨설팅'} />
      <AbroadLearn />
      <UsefulInfo />
    </>
  )
}
