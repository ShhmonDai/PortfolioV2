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
    title: 'BLOOM - Goal & Habit Visualizer and Tracker',
    description1: 'Habit and Goal tracker with progress visualization as a growing tree. With NLU journal entry analysis of emotions and sentiments',
    description2: '',
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

      <div className="container portfolio__container featuredContainer grid grid-cols-6 2xl:grid-cols-8 ">
        {
          dataFeatured.map(({ id, image, gif, title, description1, description2, tech, github, demo, demo_type }) => {
            return (
              <article key={id} className='portfolio__item featuredItem relative col-span-6  2xl:col-span-6 2xl:col-start-2 shadow-[0_0_20px_rgba(0,0,0,0.40)]'>

                <h3 className='absolute -bottom-14 inset-x-0 text-center text-2xl text-[rgb(245,187,150)]'><FaAward/></h3>

                <div className='featuredItem flex flex-col xl:flex-row justify-around lg:justify-center lg:gap-5'>

                  <div className="portfolio__item-image flex flex-col justify-center">
                    <img src={image} alt={title} onMouseOver={e => e.currentTarget.src = gif} onMouseOut={e => e.currentTarget.src = image} />
                  </div>
                  
                  <div className='flex flex-col justify-start lg:justify-between xl:max-w-[50%]'>
                    <h3>{title}</h3>
                    <div className='mb-3 text-gray-200'>
                      <p> {description1} </p>
                    </div>
                    <h4>{tech}</h4>
                    <div className="portfolio__item-cta lg:mt-10  lg:mb-5">
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
          data.map(({ id, image, gif, title, tech, github, demo, demo_type }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">

                  <img src={image} alt={title} onMouseOver={e => e.currentTarget.src = gif} onMouseOut={e => e.currentTarget.src = image} />
                </div>
                <h3>{title}</h3>
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