import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/sully.jpg';
import AVTR2 from '../../assets/saitama.jpg';

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Sully Sullivan',
    review: 'Very scary code! I love how my custom project turned out.'
  },
  {
    avatar: AVTR2,
    name: 'Saitama',
    review: 'Super fast service!!'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>

    </section>
  )
}

export default Testimonials