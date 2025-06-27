import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Work that I enjoy</h5>
      <h2>My Interests</h2>

      

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Technical Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Back-end Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Relational Databases</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Functional Product Design</p>
            </li>
            <li>
              <p>I've always been a curious person who loved figuring out how various technologies and structures worked. Currently instead of figuring out 
                existing constructions I design and create my own solutions. As an artist I see the beauty in well done technical creations. 
                Engineering truly is underappreciated as a medium of art.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Visual Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Front-end Design & Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI/UX Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Photoshop work</p>
            </li>
            <li>
              <p>I started my visual art journey at a young age of 7. Ever since then I've loved implementing artistic touches into all my work and hobbies. 
              I enjoy learning the newest design trends and standards but also getting creative and coming up with unique and personal works of art. </p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Full-stack Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Android Mobile Apps</p>
            </li>
            <li>
              <p>I love creating working products that are accessible to everyone. At the same time I love combining the technical and visual aspects into
                a one creation. Web and App development fullfils both of these and this is why it's one of my passions.  
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>

      <div className='border_bottom'>
        <img src="/artTop5.png" alt="BG" />
      </div>


    </section>
  )
}

export default Services