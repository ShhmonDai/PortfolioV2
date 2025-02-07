import React from 'react'
import './interests.css'
import AVTR1 from '../../assets/Art01.jpg'
import AVTR2 from '../../assets/Art02.jpg'
import AVTR3 from '../../assets/Art03.jpg'
import AVTR4 from '../../assets/Art04.jpg'
import AVTR5 from '../../assets/Art05.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    image: AVTR1,
    title: 'Book Illustration',
  },
  {
    image: AVTR2,
    title: 'Book Illustration',
  },
  {
    image: AVTR3,
    title: 'Berserk Fan Art',
   
  },
  {
    image: AVTR4,
    title: 'Concept Art',
  },
  {
    image: AVTR5,
    title: 'Game Sketch',
  },
]


const Interests = () => {
  return (
    <section id='interests'>
      <h5>Hobbies</h5>
      <h2>Illustrations and Paintings</h2>

      <Swiper className="container interests__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={50}
      slidesPerView={1}
  
      pagination={{ clickable: true }}>
        {
          data.map(({image, title}, index) => {
            return (
              <SwiperSlide key={index} className="interest">
              <div className="image">
                <img src={image} alt={image}/>
              </div>
              <h5 className='title'>{title}</h5>
           
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Interests