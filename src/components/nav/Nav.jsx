import React from 'react'
import './nav.css'

import {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

/* import {useState} from 'react' */

const Nav = () => {

  // Set currently clicked page as active on navbar
  // Currently disabled to prevent visual clutter 

  /* const [activeNav, setActiveNav] = useState('')
  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} */

  return (
    <nav>
      <a href="#header" ><AiOutlineHome /> Home</a>
      <a href="#portfolioNav" ><RiServiceLine /> Portfolio</a>
      <a href="#about" ><AiOutlineUser/> About</a>
      <a href="#experience" ><BiBook/> Skills</a>
      <a href="#contact" ><BiMessageSquareDetail/> Contact</a>

    </nav>
  )
}

export default Nav