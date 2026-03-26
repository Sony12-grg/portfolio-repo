import React from 'react'
import Navbar from './layout/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects.jsx'
import Testimonals from './sections/Testimonals.jsx'
export default function App() {
  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Contact />
        <Experience />
        <Projects />
        <Testimonals/>
      </main>
    
    </div>
  )
}
