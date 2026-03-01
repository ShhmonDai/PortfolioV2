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
import CTA from '../header/CTA'

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


        <div className="about__content flex flex-col gap-12 mb-14">

          {/* About + Education */}
          <div className="grid sm:grid-cols-2 gap-14">

            {/* Left: About Text */}
            <div className='z-20 flex flex-col items-start'>
              <h2 className="text-3xl font-medium text-[rgb(245,187,150)] mb-2">
                Hi, I’m Szymon
              </h2>

              <p className="text-white/80 leading-relaxed">
                New York City–based professional transitioning into <b className='text-white'>Construction Project Management</b>,
                combining a technical background in <b>software engineering</b> with hands-on <b>construction experience</b>.
              </p>

              <p className="text-white/70 leading-relaxed">
                My career has spanned carpentry, construction, software development, illustration, and personal training —
                shaping a disciplined, detail-oriented, and creative approach to every project.
              </p>

              <p className="text-white/70 leading-relaxed">
                Currently advancing expertise in <b className='text-white'>AutoCAD</b>, <b className='text-white'>Primavera P6</b>, <b className='text-white'>Procore</b>,
                and preparing for <b className='text-white'>CAPM certification</b> and <b className='text-white'>OSHA 30-hour</b>.
              </p>

              <CTA />
            </div>

            {/* Right: Education Timeline */}
            <div className="relative">

              <h3 className="text-sm text-center mb-5 text-white/40">
                Education
              </h3>
              

              {/* Vertical line */}
              <div className="absolute left-0 top-10 bottom-0 w-px bg-[rgb(245,187,150)]/40" />

              <div className="space-y-16 pl-8">

                {/* Item 1 */}
                <div className="relative pl-6">
                  <span className="absolute -left-[20px] top-6"> <FaGraduationCap className="about__icon" /></span>

                  <h3 className="text-2xl font-medium text-[rgb(245,187,150)]">
                    Hunter College
                  </h3>

                  <p className="text-[rgb(245,187,150)] text-md mt-1">
                    Bachelor of Arts in Computer Science · Minor in Mathematics
                  </p>

                  <p className="text-white/70 mt-4 text-sm leading-relaxed max-w-2xl">
                    Built a strong analytical and systems-thinking foundation,
                    developing structured problem-solving skills and technical fluency
                    that now inform my approach to project coordination and planning.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="relative pl-6">
                  <span className="absolute -left-[20px] top-6"> <FaAward className="about__icon" /></span>

                  <h3 className="text-2xl font-medium text-[rgb(245,187,150)]">
                    Art & Design High School
                  </h3>

                  <p className="text-[rgb(245,187,150)] text-md mt-1">
                    Illustration Major
                  </p>

                  <p className="text-white/70 mt-4 text-sm leading-relaxed max-w-2xl">
                    Developed visual discipline, spatial awareness, and composition —
                    principles that continue to influence how I structure projects
                    and think about design execution.
                  </p>
                </div>


              </div>
            </div>

          </div>

          

          {/* Divider */}
          <div className="w-full h-px bg-[rgb(245,187,150)]/20"></div>

          {/* Neat Facts */}
          <div className=''>
            <h3 className="text-xl font-medium text-[rgb(245,187,150)] mb-3">
              Off the Clock
            </h3>
            <h4 className='text-sm text-[rgb(245,187,150)]/70 mb-5'>Because Life Isn’t All Code and Blueprints</h4>

            <ul className="space-y-3 text-white/70">
              <li className="flex items-start">
                <BsDot className="about__icon2" />
                Passionate about weightlifting, fantasy literature & meditation
              </li>
              <li className="flex items-start">
                <BsDot className="about__icon2" />
                Avid fan of classic RPGs (Baldur’s Gate II, Morrowind)
              </li>
              <li className="flex items-start">
                <BsDot className="about__icon2" />
                Enthusiast of Belgian Trappist ales
              </li>
              <li className="flex items-start">
                <BsDot className="about__icon2" />
                Former illustrator — now sketching in code
              </li>
            </ul>
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