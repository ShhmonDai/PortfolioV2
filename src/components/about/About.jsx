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


      <div id='aboutContainer' className='container about__container'>


        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
          <div className="content">
            <div className="details">
              <h2>Szymon Pozniewski <FiInstagram /></h2>
              <h4>Web & Software Developer</h4>

              <div className="data">
                <div>
                  <h3>169</h3>
                  <h5>Posts</h5>
                </div>

                <div>
                  <h3>47</h3>
                  <h5>Followers</h5>
                </div>

                <div>
                  <h3>80</h3>
                  <h5>Following</h5>
                </div>

              </div>
              <div className="actionBtn">
                <a href="https://instagram.com/shh.mon" target="blank" rel="noopener noreferrer">View</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>

        </div>



        <div className="about__content">

          <div className="flex flex-col items-center sm:items-stretch sm:justify-center gap-2 sm:flex-row">

            <article className='about__card w-full sm:w-[45%] flex flex-col items-center bg-[#004c4a] border-2 rounded-t-3xl px-4 py-3 text-center'>
              <FaGraduationCap className='about__icon' />
              <h5>Hunter College</h5>
              <small><BsDot className='about__icon2' />Bachelor of Arts in Computer Science</small>
              <small><BsDot className='about__icon2' />Minor in Math</small>
            </article>

            <article className='about__card w-full sm:w-[45%] flex flex-col items-center bg-[#004c4a] border-2 rounded-t-3xl px-4 py-3 text-center'>
              <FaAward className='about__icon' />
              <h5>Art & Design High School</h5>
              <small><BsDot className='about__icon2' />Illustration Major</small>
            </article>

          </div>

          <div className="gradient-box py-10 px-4">
            <h2 className='font-light'>A little About Me</h2>

            <p className='font-light text-gray-200'>
              Hi, I'm Szymon, a New York City-based software and web developer with a unique blend of creative and hands-on experience. <br /><br />
             My diverse history, ranging from carpentry and construction, painting and illustration to being a certified personal trainer, has shaped my problem-solving skills and ability to think outside the box, making me not just a developer, but a creator who builds with purpose. 
             Let's bring your ideas to life!

            </p>


            <h3 className='font-light mt-10'>Neat facts about me:</h3>
            <h4 className='text-sm mb-5'>(Or at least I think they are neat)</h4>
            <p className='font-light text-gray-200'>
            I love old school RPG games (BG2, Morrowind), fancy darker beers (St Bernardus Tripel), weightlifting and fantasy books (LOTR, The Stormlight Archive), including alot of Chinese webnovels (Lord Of Mysteries) 

            <br /><br />

            <a href={CV} target="_blank" rel="noopener noreferrer" className='relative btn z-50'>Download CV</a>

            </p>
          </div>

        </div>
      </div>

      <div className='z-10 -mb-16 lg:-mb-36'>
        <img src="/aboutBottom.png" alt="BGbottom" className='z-10' />
      </div>
      
    </section>
  )
}

export default About