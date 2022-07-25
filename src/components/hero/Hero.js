import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination'

import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'

const imagesList = [
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
  )
}

export default Hero;