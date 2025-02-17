import React from 'react'
import './portfolio.css'

import { FaAward } from 'react-icons/fa'

import IMG1 from '../../assets/BloomPic.jpg'
import IMG2 from '../../assets/FJPic.jpg'
import IMG3 from '../../assets/DatabasePic.jpg'
import IMG4 from '../../assets/PortfolioPic.jpg'
import IMG5 from '../../assets/BlogPic.jpg'
import IMG6 from '../../assets/HorizonPic.jpg'
import IMG7 from '../../assets/BloomV2pic.jpg'


import GIF1 from '../../assets/BloomGif.gif'
import GIF2 from '../../assets/FJGif.gif'
import GIF3 from '../../assets/DatabaseGif.gif'
import GIF4 from '../../assets/PortfolioGif.gif'
import GIF5 from '../../assets/BlogGif.gif'
import GIF6 from '../../assets/HorizonGif.gif'
import GIF7 from '../../assets/BloomV2Gif.gif'

const dataFeatured = [
  {
    id: 10,
    image: IMG7,
    gif: GIF7,
    title: 'BLOOM - Goal, Habit & Journal Progress Tracker',
    description1: 'Goal, Habit and Journal tracker with dynamic progress visualization as a growing tree. Goals, Subgoals and Habits within 3 self improvement categories; Mind, Body, Spirit. Streak tracking of completed Habits. Daily habits timeline. Journal entries with emotion analysis. Informative Dashboard and artistic personally designed UI/UX. ',
    description2: ' " With the power of IBM Watsons AI Machine Learning, your journal becomes a canvas where sentiments and emotions are analyzed, offering insights into the depth of your experiences. With Bloom, cultivate habits, track goals, and witness your journey towards success unfold in a visually captivating way. "',
    tech: 'React.JS - Node.JS - MongoDB - P5.JS - Firebase - Express.JS - JWT & Bcrypt - Tailwind - IBM Machine Learning API',
    github: 'https://github.com/ShhmonDai/Bloom-V2---react-MERN',
    demo: 'https://bloomhabits.com/',
    demo_type: 'Website'
  }
]

const data = [
  {
    id: 1,
    image: IMG5,
    gif: GIF5,
    title: 'Szymons Eclectic Anecdotes - MERN Blog from scratch',
    description: 'Custom made Personal Blog. Complete with integration of a full Rich Text Editor with dynamic blog post preview, picture upload and hosting, User accounts with ability to comment and a rich admin dashboard.',
    tech: 'React.JS - Node.JS - MongoDB - Firebase - Express.JS - JWT & Bcrypt - TinyMCE - Prism - Tailwind',
    github: 'https://github.com/ShhmonDai/Personal-mern-blog',
    demo: 'https://shhmon.blog/',
    demo_type: 'Website'
  },
  {
    id: 2,
    image: IMG6,
    gif: GIF6,
    title: 'The Horizon Manager - MERN package manager',
    description: 'Package manager to simplify organization and package shelf location lookup for a busy apartment building. Improved lookup times from O(N) to O(1), saving up to several minutes per package. The goal was to provide the elderly workers with a convenient UI/UX to urge them towards use of technology on the go. Meant to be used alongside BuildingLink',
    tech: 'React.JS - Node.JS - MongoDB - Firebase - Express.JS - JWT & Bcrypt - Tailwind - Flowbite',
    github: 'https://github.com/ShhmonDai/Horizon-Delivery-Manager',
    demo: 'https://horizon-delivery-manager.onrender.com/',
    demo_type: 'Website - (Slow Load)'
  },
  {
    id: 4,
    image: IMG2,
    gif: GIF2,
    title: 'FoodJunkies - Android / IOS application - From Design to full Implementaion',
    description: 'Food recommendation app for indecisive eaters or people in a rush, while taking in consideration of users previous tastes.',
    tech: 'AndroidStudio - Java - PHP - MySQL - AWS; RDS & EC2 - Yelp API',
    github: 'https://github.com/ShhmonDai/FoodJunkies',
    demo: 'https://github.com/ShhmonDai/FoodJunkies/blob/main/FoodJunkiesReadme.pdf',
    demo_type: 'Presentation'
  },
  {
    id: 5,
    image: IMG4,
    gif: GIF4,
    title: 'Personal Portfolio',
    description: 'A simple single page website to showcase my work. The site you are currently on',
    tech: 'React.JS - Node.JS - EmailJS',
    github: 'https://github.com/ShhmonDai/PortfolioWebsite',
    demo: 'https://shhmon.com',
    demo_type: 'Website'
  },
  {
    id: 7,
    image: IMG1,
    gif: GIF1,
    title: 'BLOOM - Old concept version',
    description: 'An initial proof of concept and P5.JS capability test',
    tech: 'JS - MySQL - P5.JS - Handlebars.JS - Express.JS - JWT & Bcrypt',
    github: 'https://github.com/ShhmonDai/Bloom',
    demo: 'https://github.com/ShhmonDai/Bloom/blob/master/README.md',
    demo_type: 'Presentation'
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <div className="divider">

      </div>

      <h5 id='portfolioNav'>My Recent Work</h5>
      <h2>Portfolio</h2>  

      <div className="container portfolio__container featuredContainer grid grid-cols-6">
        {
          dataFeatured.map(({ id, image, gif, title, description1, description2, tech, github, demo, demo_type }) => {
            return (
              <article key={id} className='portfolio__item featuredItem relative col-span-6 lg:max-w-xl xl:max-w-6xl 2xl:max-w-6xl lg:place-self-center shadow-[0_0_20px_rgba(0,0,0,0.40)]'>

                <h3 className='absolute -bottom-14 inset-x-0 text-center text-2xl text-[rgb(245,187,150)]'><FaAward/></h3>

                <div className='featuredItem flex flex-col xl:flex-row justify-around lg:justify-center lg:gap-5 xl:gap-10'>

                  <div className="portfolio__item-image flex flex-col justify-center items-center">
                    <img className='' src={image} alt={title} onMouseOver={e => e.currentTarget.src = gif} onMouseOut={e => e.currentTarget.src = image} />
                    
                    <div className="portfolio__item-cta lg:mt-10  lg:mb-5 hidden xl:flex">
                      <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">{demo_type}</a>
                    </div>
                  
                  </div>
                  
                  <div className='flex flex-col justify-start xl:max-w-[50%]'>
                    <h3 className='text-[rgb(245,187,150)]'>{title}</h3>
                    <div className='mb-4 text-gray-100 font-thin'>
                      <p> {description1} </p>
                      <p className='mt-3'> {description2} </p>
                    </div>
                    <h4>{tech}</h4>
                    <div className="portfolio__item-cta lg:mt-10  lg:mb-5 xl:hidden">
                      <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">{demo_type}</a>
                    </div>
                  </div>

                </div>

              </article>
            )
          })
        }
      </div>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, gif, title, description, tech, github, demo, demo_type }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">

                  <img src={image} alt={title} onMouseOver={e => e.currentTarget.src = gif} onMouseOut={e => e.currentTarget.src = image} />
                </div>
                <h3>{title}</h3>
                <p className='mb-4 text-gray-100 font-thin'> {description} </p>
                <h4>{tech}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">{demo_type}</a>
                </div>
              </article>
            )
          })
        }
      </div>

      <div className=''>
        <img src="/aboutTop.png" alt="BG" />
      </div>

    </section>
  )
}

export default Portfolio