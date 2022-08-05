import React from 'react';
import Header from '../header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination'

// import image1 from '../../images/image1.jpg'
// import image2 from '../../images/image2.jpg'
// import image3 from '../../images/image3.jpg'

import lines1 from '../../images/Slider/lines1.jpg'
import lines2 from '../../images/Slider/lines2.jpg'
import lines3 from '../../images/Slider/lines3.jpg'
import image1 from '../../images/Slider/AMDVL1.jpg'
import image2 from '../../images/Slider/AMDVL2.jpg'
import image3 from '../../images/Slider/AMDVL3.jpg'

// const imagesList = [
  // {
  //   src: image1,
  // },
  // {
  //   src: image2,
  // },
  // {
  //   src: image3,
  // },
// ]

const imagesList = [
  {
    src: lines1,
  },
  {
    src: lines2,
  },
  {
    src: lines3,
  },
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
]

function Hero() {
  return (
    <div className="hero">
      {/* <h1 className="hero__title">В ногу со временем, опережая конкурентов</h1> */}
      <Header />
      <div className="hero__container">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {imagesList.map(({ src }) => (
            <SwiperSlide  key={src}>
              <img src={src} alt=""/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Hero;