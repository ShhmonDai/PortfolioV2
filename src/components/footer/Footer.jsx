import React from 'react'
import './footer.css'

import {FiInstagram} from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsLaptop } from 'react-icons/bs'




const Footer = () => {
  return (
  
    
    <div className='footer_body'>
      <footer>

        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>

        <ul className="social_icon">
          <li> <a href="https://instagram.com/shh.mon" target="_blank" rel="noopener noreferrer"> <FiInstagram/> </a> </li>
          <li> <a href="https://www.linkedin.com/in/shhmon" target="_blank" rel="noopener noreferrer"> <BsLinkedin /> </a> </li>
          <li> <a href="https://github.com/ShhmonDai" target="_blank" rel="noopener noreferrer"> <FaGithub /> </a> </li>
          <li> <a href="https://shhmon.blog/" target="_blank" rel="noopener noreferrer"> <BsLaptop /> </a> </li>
        </ul>

        <ul className="menu">
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <p>©2025 Szymon Pozniewski</p>

      </footer>
    </div>
    
  )
}



export default Footer