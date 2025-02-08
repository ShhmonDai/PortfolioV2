import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa' 
import { FaGraduationCap } from 'react-icons/fa' 
import { FiInstagram } from 'react-icons/fi'
import { BsDot } from 'react-icons/bs'
import CV from '../../assets/cv.pdf'

const About = () => {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        
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

            <article className='about__card w-full sm:w-[45%] flex flex-col items-center bg-[#004c4a] border-2 rounded-t-3xl px-4 py-3 text-center hover:bg-transparent hover:border-(--color-primary)'>
              <FaGraduationCap className='about__icon'/>
              <h5>Hunter College</h5>
              <small><BsDot className='about__icon2' />Bachelor of Arts in Computer Science</small>
              <small><BsDot className='about__icon2' />Minor in Math</small>
            </article>

            <article className='about__card w-full sm:w-[45%] flex flex-col items-center bg-[#004c4a] border-2 rounded-t-3xl px-4 py-3 text-center hover:bg-transparent hover:border-(--color-primary)'>
              <FaAward className='about__icon' />
              <h5>Art & Design High School</h5>
              <small><BsDot className='about__icon2' />Illustration Major</small>
            </article>
            
          </div>

          <div className="gradient-box">
            <h2>I am a New York City based Software & Web Developer</h2>

            <p>
              As a developer I enjoy the entire process of bringing products to life. Starting from scratch with just an idea, wireframing, designing databases, 
              coming up with comfortable plus efficient UI/UX and the whole coding process to grow the idea into a finished working product that all people involved 
              with it's creation can feel proud of. 

              <br /><br />
  
              My background in art and design helps me stay creative and on top of the front-end practices while strong technical curiosity pushes me towards 
              continuously learning the proper back-end tools and implementations.

              <br /><br />

              Currently I am focusing on improving my Java, Javascript and Express.JS knowledge

              <br /><br />

              <a href={CV} target="_blank" rel="noopener noreferrer" className='btn'>Download CV</a>

            </p>
          </div>

        </div>
      </div>
      
    </section>
  )
}

export default About