import {React } from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Interests from './components/interests/Interests'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


export default function App() {
  

  const spinner = document.getElementById("ipl-progress-indicator");

  if (spinner) {
    setTimeout(() => {
      // fade out
      spinner.classList.add('available')
      setTimeout(() => {
        // remove from DOM
        spinner.outerHTML = ''
      }, 3000)
    }, 2000)
  }

  return (
    <>
      <Header />
      <Nav />
      <Portfolio />
      <About />
      <Experience />
      <Services />
      <Interests />
      <Contact />
      <Footer />
    </>
  );
}