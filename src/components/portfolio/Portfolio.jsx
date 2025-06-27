import React from 'react'
import './portfolio.css'

import { FaAward } from 'react-icons/fa'
import { BiCheck } from 'react-icons/bi'

import IMG1 from '../../assets/BloomPic.jpg'
import IMG2 from '../../assets/FJPic.jpg'
import IMG3 from '../../assets/DatabasePic.jpg'
import IMG4 from '../../assets/PortfolioPic.jpg'
import IMG5 from '../../assets/BlogPic.jpg'
import IMG6 from '../../assets/HorizonPic.jpg'
import IMG7 from '../../assets/BloomV2pic.jpg'
import IMG8 from '../../assets/RedditPic.png'


import GIF1 from '../../assets/BloomGif.gif'
import GIF2 from '../../assets/FJGif.gif'
import GIF3 from '../../assets/DatabaseGif.gif'
import GIF4 from '../../assets/PortfolioGif.gif'
import GIF5 from '../../assets/BlogGif.gif'
import GIF6 from '../../assets/HorizonGif.gif'
import GIF7 from '../../assets/BloomV2Gif.gif'
import GIF8 from '../../assets/RedditGif.png'

const dataFeatured = [
  {
    id: 10,
    image: IMG7,
    gif: GIF7,
    title: 'Bloom Habits - ADHD Productivity Web App with Visual Progress & AI Journaling',
    description1: 'Productivity companion for tracking Goals, Tasks, Daily Structure Builder, Recurring Habits and AI Journal entry emotional analysis. All with dynamic progress visualizations.',
    description2: 'Machine Learning AI analysis of Journal entries emotions.',
    description3: 'AI Assistant with RAG (Retrieval-Augmented Generation) architecture for context-aware interaction with user data.',
    description4: 'Goals, Subgoals and Habits within 3 self improvement categories; Mind, Body, Spirit.',
    description5: 'Streak tracking of completed Habits and a daily Habits timeline.',
    description6: 'Wallpaper Engine integration - Dashboard as a Live Interactable Desktop Wallpaper.',
    tech: 'React.JS - Redux - Node.JS - P5.JS - MongoDB - Firebase - Express.JS - JWT & Bcrypt - Tailwind - IBM Machine Learning API.',
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
    description: 'Custom blog platform, featuring integration of a 3rd party WYSIWYG Rich Text editor, real-time post preview, image upload, full user system allowing comments and likes and a feature-rich admin dashboard for management.',
    description2: 'Extended TinyMCE capabilities for image insertion & custom language code snippets.',
    description3: 'Integrated Prism.js for syntax highlighting in technical posts with code.',
    tech: 'React.JS - Node.JS - MongoDB - Firebase - Express.JS - JWT & Bcrypt - TinyMCE - Prism.JS - Tailwind',
    github: 'https://github.com/ShhmonDai/Personal-mern-blog',
    demo: 'https://shhmon.blog/',
    demo_type: 'Website'
  },
  {
    id: 2,
    image: IMG6,
    gif: GIF6,
    title: 'The Horizon Delivery Manager',
    description: 'Custom delivery and package management web application for a high-traffic, 430-unit residential building, replacing an inefficient legacy system that users found unusable. Meant to be used alongside BuildingLink.',
    description2: 'Improved lookup times from O(N) to O(1), saving up to several minutes per package.',
    description3: 'Increased user adoption among the tech-averse elderly workers by providing them with a convenient and simplified UI/UX',
    tech: 'React.JS - Node.JS - MongoDB - Firebase - Express.JS - JWT & Bcrypt - Tailwind - Flowbite',
    github: 'https://github.com/ShhmonDai/Horizon-Delivery-Manager',
    demo: 'https://horizon-delivery-manager.onrender.com/',
    demo_type: 'Demo - (Slow)'
  },
  {
    id: 6,
    image: IMG8,
    gif: GIF8,
    title: 'Chrome Extension: Reddit Post AI Checker',
    description: 'Chrome Extension that automatically scrapes the currently viewed Reddit post content and allows the user to see whether the post content was written by AI — all in just two clicks.',
    tech: 'React.JS - OpenAI ChatGPT API - Axios - Tailwind',
    github: 'https://github.com/ShhmonDai/redditbs-chrome-extension-Ai',
    demo: 'https://github.com/ShhmonDai/redditbs-chrome-extension-Ai/blob/main/README.md',
    demo_type: 'Readme'
  },
  {
    id: 4,
    image: IMG2,
    gif: GIF2,
    title: 'FoodJunkies - Android / IOS application - From Design to full Implementaion',
    description: 'Food recommendation app for indecisive eaters or people in a rush, based on users previous tastes and specified constraints.',
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
    demo_type: 'Readme'
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
          dataFeatured.map(({ id, image, gif, title, description1, description2, description3, description4, description5, description6, tech, github, demo, demo_type }) => {
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
                    <div className='mb-4 text-zinc-200'>
                      <p> {description1} </p>
                      <ul className='font-thin text-zinc-200'>
                        <li className='mt-3 flex items-center gap-2'><BiCheck className='text-[rgb(245,187,150)] text-2xl w-auto' /> <p className='w-full'>{description2}</p> </li>
                        <li className='mt-3 flex items-center gap-2'><BiCheck className='text-[rgb(245,187,150)] text-2xl w-auto' /> <p className='w-full'>{description3}</p> </li>
                        <li className='mt-3 flex items-center gap-2'><BiCheck className='text-[rgb(245,187,150)] text-2xl w-auto' /> <p className='w-full'>{description4}</p> </li>
                        <li className='mt-3 flex items-center gap-2'><BiCheck className='text-[rgb(245,187,150)] text-2xl w-auto' /> <p className='w-full'>{description5}</p> </li>
                        <li className='mt-3 flex items-center gap-2'><BiCheck className='text-[rgb(245,187,150)] text-2xl w-auto' /> <p className='w-full'>{description6}</p> </li>
                      </ul>
                    </div>
                    <h4>{tech}</h4>
                    <div className="portfolio__item-cta flex lg:mt-10  lg:mb-5 xl:hidden">
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
          data.map(({ id, image, gif, title, description, description2, description3, tech, github, demo, demo_type }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">

                  <img src={image} alt={title} onMouseOver={e => e.currentTarget.src = gif} onMouseOut={e => e.currentTarget.src = image} />
                </div>
                <h3>{title}</h3>
                <p className='mb-4 text-zinc-200'> {description} </p>
                
                {description2 &&
                  <div className='mb-4 -mt-4 text-zinc-200 text-sm'> 
                    <li className='mt-2 flex items-center gap-2'><BiCheck className='text-[rgb(245,187,150)] text-lg w-auto' /> <p className='w-full'>{description2}</p> </li>
                    <li className='mt-2 flex items-center gap-2'><BiCheck className='text-[rgb(245,187,150)] text-lg w-auto' /> <p className='w-full'>{description3}</p> </li>
                  </div>
                }

                <h4>{tech}</h4>
                <div className="portfolio__item-cta flex">
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