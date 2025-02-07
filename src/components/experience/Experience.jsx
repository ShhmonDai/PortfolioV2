import React from 'react'
import './experience.css'

import { SiReact } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { SiPhp } from 'react-icons/si'
import { SiAmazonaws } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiAndroidstudio } from 'react-icons/si'
import { SiCplusplus } from 'react-icons/si'
import { SiJava } from 'react-icons/si'
import { SiVisualstudiocode } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      

      <h5>Tools and technologies I've worked with</h5>
      <h2>My Skills</h2>


      <div className="container experience__container">
       
        {/* BEGINNING OF EXPERIENCED */}
        <div className="experience__frontend">
          <h3>Proficient</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <SiReact className='experience__details-icon' />
              <div>
                <h4>React.js</h4>

              </div>
            </article>
            

            <article className='experience__details'>
              <SiNodedotjs className='experience__details-icon' />
              <div>
                <h4>Node.js</h4>

              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>

              </div>
            </article>

            <article className='experience__details'>
              <SiMysql className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>

              </div>
            </article>

            <article className='experience__details'>
              <SiHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML/CSS</h4>

              </div>
            </article>
           
          </div>
        </div>
        {/* END OF EXPERIENCED */}

        {/* BEGINNING OF INTERMEDIATE/BASIC */}
        <div className="experience__backend">
          <h3>Prior Experience</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <SiBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                
              </div>
            </article>

            <article className='experience__details'>
              <SiPhp className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                
              </div>
            </article>

            <article className='experience__details'>
              <SiAmazonaws className='experience__details-icon' />
              <div>
                <h4>AWS EC2</h4>
                
              </div>
            </article>

            <article className='experience__details'>
              <SiExpress className='experience__details-icon' />
              <div>
                <h4>Express</h4>
                
              </div>
            </article>


          </div>
        </div>
        {/* END OF INTERMEDIATE */}

        {/* BEGINNING OF GENERAL TOOLS  */}
        <div className="experience__general">
          <h3>Tech & Languages</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <SiAndroidstudio className='experience__details-icon' />
              <div>
                <h4>Android Studio</h4>

              </div>
            </article>

            <article className='experience__details'>
              <SiCplusplus className='experience__details-icon' />
              <div>
                <h4>C++</h4>

              </div>
            </article>

            <article className='experience__details'>
              <SiJava className='experience__details-icon' />
              <div>
                <h4>Java</h4>

              </div>
            </article>

            <article className='experience__details'>
              <SiVisualstudiocode className='experience__details-icon' />
              <div>
                <h4>Visual Studio Code</h4>

              </div>
            </article>

          </div>
        </div>
        {/* END OF GENERAL TOOLS */}        


      </div>
    </section>
  )
}

export default Experience