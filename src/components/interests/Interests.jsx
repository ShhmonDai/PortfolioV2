import React from 'react'
import './interests.css'
import AVTR1 from '../../assets/Art01.jpg'
import AVTR2 from '../../assets/Art02.jpg'
import AVTR3 from '../../assets/Art03.jpg'
import AVTR4 from '../../assets/Art04.jpg'
import AVTR5 from '../../assets/Art05.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';



const data = [
  {
    image: AVTR1,
    title: 'Book Illustration - 2013',
  },
  {
    image: AVTR2,
    title: 'Book Illustration - 2013',
  },
  {
    image: AVTR3,
    title: 'Berserk Fan Art - 2020',
   
  },
  {
    image: AVTR4,
    title: 'Concept Art - 2012',
  },
  {
    image: AVTR5,
    title: 'Game Sketch - 2011',
  },
]


const Interests = () => {
  return (
    <div id='interests' className='bg-white bg-[url("/ParallaxPaper5.png")] -my-1'>
      <h5>Hobbies</h5>
      <h2>Illustrations and Paintings</h2>

      <div className='artBackground'>

      <Swiper className="container interests__container" 
      // install Swiper modules
      modules={[Pagination, Navigation, EffectFade]} 
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      loop={true}
      grabCursor={true}
      fadeEffect={{ crossFade: true }}
      effect={'fade'}
      pagination={{ clickable: true, dynamicBullets: true }}>
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
      
      </div>


    </div>
  )
}

export default Interests