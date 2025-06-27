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



        <div className="about__content flex flex-col">

          <div className="flex flex-col gap-2 sm:flex-row">

            <article className='about__card w-full sm:w-[50%] flex flex-col items-center bg-[#004c4a] border-2 rounded-t-3xl px-4 py-3 text-center'>
              <FaGraduationCap className='about__icon' />
              <h5>Hunter College</h5>
              <small><BsDot className='about__icon2' />Bachelor of Arts in Computer Science</small>
              <small><BsDot className='about__icon2' />Minor in Math</small>
            </article>

            <article className='about__card w-full sm:w-[50%] flex flex-col items-center bg-[#004c4a] border-2 sm:rounded-t-3xl px-4 py-3 text-center'>
              <FaAward className='about__icon' />
              <h5>Art & Design High School</h5>
              <small><BsDot className='about__icon2' />Illustration Major</small>
            </article>

          </div>

          <div className="gradient-box pt-10 mb-10 px-6 bg-black/20 rounded-b-2xl">
            <h2 className='font-light'>Hi, I’m <b>Szymon</b></h2>
            <h4 className='text-sm mb-10'>Pronounced as Shh-mohn, but feel free to call me Simon</h4>

            <p className='font-light text-gray-200'>
              I'm a New York City-based <b>software engineer</b> and <b>web developer</b> with a passion for building thoughtful, user-focused digital experiences.
            </p>

            <p className='font-light text-gray-200'>
              My journey into software development has been anything but typical. With a background in carpentry, construction, painting, illustration, and even personal training, 
              I bring a unique blend of creativity, discipline, and hands-on problem-solving to every project. 
              These experiences have shaped how I approach software: not just as code, but as something built with care, function, and purpose.
            </p>

            <p className='font-light text-gray-200'>
              Whether I’m developing full-stack applications or designing intuitive UI systems, 
              I aim to bridge the gap between logic and creativity — engineering tools that solve real problems and resonate with real people.
            </p>
            


            <h3 className='font-light mt-10 text-xl'>Neat Facts</h3>
            <h4 className='text-sm mb-5'>Because Life Isn’t All Code</h4>
            <p className='font-light text-gray-200'>
            <ul >
                <li className='flex flex-row items-center py-2'><BsDot className='about__icon2' />Avid fan of classic RPGs like Baldur’s Gate II and Morrowind</li>
                <li className='flex flex-row items-center py-2'><BsDot className='about__icon2' />Enthusiast of darker Belgian-style beers (St. Bernardus Tripel is a favorite)</li>
                <li className='flex flex-row items-center py-2'><BsDot className='about__icon2' />Passionate about weightlifting and long-form fantasy, such as: The Stormlight Archive, LOTR, Lord of Mysteries, and other Chinese web novels</li>
                <li className='flex flex-row items-center py-2'><BsDot className='about__icon2' />Used to draw and illustrate — now I just sketch in code</li>
            </ul>

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