import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" rel="noopener noreferrer" className='btn'>Download CV</a>
      <a href="#portfolio" className='btn btn-primary'>See My Work</a>
    </div>
  )
}

export default CTA