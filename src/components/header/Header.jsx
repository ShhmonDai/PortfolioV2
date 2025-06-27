import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-card1.jpg'
import HeaderSocials from './HeaderSocials'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsLaptop } from 'react-icons/bs'
import ME2 from '../../assets/me-card2.jpg'
import { useState, useEffect } from 'react'



const Header = () => {
  

    const [card, setCard] = useState("card")

    const listenScrollEvent = (event) => {
      if (window.scrollY <= 50) {
        return setCard("card")
      } 
      if (window.scrollY <= 400 && window.scrollY > 50) {
        return setCard("card2")
      }
      if (window.scrollY > 400) {
        return setCard("card")
      }   
    }

    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);

      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);
  


  
  return (
   <header id="header">
    <div className="container header__container">
      <div className="header__intro">
        <h5 className="text-light">Hello, I'm</h5>
        <h1>Szymon Pozniewski</h1>
        
      </div>
      <CTA />
      <HeaderSocials />

      <div className={card}>
        <div className="imgBox">
          <img src={ME} alt="Me"></img>
          <img src={ME2} alt="Me2"></img>
        </div>
        <div className="details">
          <div className="content">
            <span className="text-light text-xs">Also known as</span>
            <h2>Simon P. Kleino</h2>
            <h5>Software Developer, Designer, Artist</h5>
              <h5>Thanks for stopping by — This space is a collection of the things I build, design, and imagine. Take your time, explore, and feel free to jump into whatever catches your eye.
            </h5>

              <h5>Additionally you can check out my:&nbsp;
                <a href="https://shhmon.blog/" target="_blank" rel="noopener noreferrer">blog!</a> 
              </h5>


            <ul className="quickNav">
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="social-icons">
                <a href="https://instagram.com/shh.mon" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                <a href="https://www.linkedin.com/in/shhmon" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                <a href="https://github.com/ShhmonDai" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://shhmon.blog/" target="_blank" rel="noopener noreferrer"><BsLaptop /></a>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className='scroll__down'>Get to know me <AiOutlineArrowRight/> </a>

    </div>
   </header>
  )
}

export default Header

