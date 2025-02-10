import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import topCurve from '../../assets/TopCurve2.png'
import bottomCurve from '../../assets/BottomCurve2.png'
import background from '../../assets/BG.png'
import {FaAward} from 'react-icons/fa' 
import { FaGraduationCap } from 'react-icons/fa' 
import { FiInstagram } from 'react-icons/fi'
import { BsDot } from 'react-icons/bs'
import CV from '../../assets/cv.pdf'

const About = () => {
  return (
    <section className='relative'>

      <h5 id='about' className='absolute -top-14 sm:-top-36 xl:-top-44 2xl:-top-72 inset-x-0'>Get To Know</h5>
      <h2 className='absolute -top-10 sm:-top-32 xl:-top-40 2xl:-top-[17rem] inset-x-0'>About Me</h2>


      <div id='MainContainer' className='min-h-[50vh] flex justify-center'>

        <div id='General' className='flex flex-col md:flex-row justify-around min-h-[50vh] m-[-2rem] xl:m-[-6rem] 2xl:m-[-10rem] w-3/4 bg-neutral-600 rounded-3xl'>

          <div id='Left' className=''>
            {/*<img src={ME} alt="ME" className='min-h-[55vh] mt-[-2rem]'/>*/}
          </div>

          <div id='Right' className='flex flex-col'></div>

        </div>

      </div>

      <div className=''>
        <img src="/aboutBottom.png" alt="BG" />
      </div>
      
    </section>
  )
}

export default About