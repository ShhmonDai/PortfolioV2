import React from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Interests from './components/interests/Interests'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



class App extends React.Component {


  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 3000)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 3000)
      }
    })
  }


  render() {
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
    )
  }
}

export default App