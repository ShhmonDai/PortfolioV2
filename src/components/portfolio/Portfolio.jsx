import React from 'react'
import './portfolio.css'


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

const data = [
  {
    id: 3,
    image: IMG7,
    gif: GIF7,
    title: 'BLOOM - Goal & Habit Visualizer and Tracker',
    tech: 'React.JS - Node.JS - MongoDB - P5.JS - Firebase - Express.JS - JWT & Bcrypt - Tailwind',
    github: 'https://github.com/ShhmonDai/Bloom-V2---react-MERN',
    demo: 'https://bloomhabits.com/',
    demo_type: 'Website'
  },
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
    id: 6,
    image: IMG3,
    gif: GIF3,
    title: 'Healthcare Centers Database System Design - Complete Mysql Implementation, ER, UML & Relational Schemas',
    tech: 'MySQL - SQL Plus',
    github: 'https://github.com/ShhmonDai/Healthcare-Centers-MySQL',
    demo: 'https://github.com/ShhmonDai/Healthcare-Centers-MySQL/blob/main/ProjectPresentation.pdf',
    demo_type: 'Presentation'
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

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>  

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

      <div className="divider"> </div>

    </section>
  )
}

export default Portfolio