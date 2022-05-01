import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/sully.jpg';
import AVTR2 from '../../assets/saitama.jpg';


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

      <swiper className='container testimonials__container'>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </article>
            )
          })
        }

      </swiper>

    </section>
  )
}

export default Testimonials