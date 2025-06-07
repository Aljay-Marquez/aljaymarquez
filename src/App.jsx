import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import About from './components/about-me.jsx'
import Project from './components/projects.jsx'
import Contact from './components/contact-info.jsx'
import informations from './assets/json/informations.json'
import './App.css'
import './assets/fonts/font.css'

const App = () => {
  const fullText = "Software Engineer."
  const [typedText, setTypedText] = useState("")
  const aboutRef = useRef(null)
  const info = informations[0]

  useEffect(() => {
    let current = 0
    let typing = true
    let interval = null

    const startTyping = () => {
      interval = setInterval(() => {
        setTypedText(fullText.slice(0, current + 1))
        current++
        if (current === fullText.length) {
          clearInterval(interval)
          typing = false
          setTimeout(() => {
            setTypedText("")
            current = 0
            typing = true
            startTyping()
          }, 1200) // delay before restarting
        }
      }, 150)
    }

    startTyping()
    return () => clearInterval(interval)
  }, [])

  // const handleSeeMore = () => {
  //   if (aboutRef.current) {
  //     const yOffset = -100; // negative value of navbar height in px (e.g., -48 for 3rem)
  //     const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
  //     window.scrollTo({ top: y, behavior: 'smooth' });
  //   }
  // }

  return (
    <div className="page">
      <Navbar />
      <div className="hero-section text-white">
        <div className="banner flex justify-center items-center h-dvh blur-sm" id='home'>
        </div>
        <div className="header-title flex flex-col text-center position">
          <h1 className='lg:text-6xl text-xl font-bold font-blade-round'> Aljay Y. Marquez </h1>
          <h2 className='lg:text-2xl text-sm font-home-video tracking-wider'>
            <span className=' font-home-video'> Aspiring </span>
            {typedText}
            <span className="blinking-cursor">|</span>
          </h2>
          <a
            className='flex self-center justify-center font-blade-round m-2 p-2 bg-cyan-600 text-xs rounded-md w-28 md:w-48'
            href={info.resumeLink} target="_blank" rel="noopener noreferrer" 
            // onClick={handleSeeMore}
          >
            Download Resume
          </a>
        </div>
        <div className="info bg-gray-800 h-auto flex flex-col justify-center items-center pt-24 lg:gap-32 md:gap-16 gap-10">
          <div className="about-me flex justify-center" ref={aboutRef}>
            <About />
          </div>
          <div className="projects flex flex-row items-center w-[80%]">
            <Project />
          </div>
          <div className="contact-info">
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App