import { useState } from 'react'
import AboutMe from './components/AboutMe'
import './App.css'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Cards from './components/Cards'
import Projects from './components/Projects'

function App() {
  return (
    <div className="flex justify-center items-center px-100 pt-20 ">
      <div className='gap-4'>
        <AboutMe/>
        <Education/>
        <Achievements/>
        <Skills/>
        <Projects/>
      </div>
    </div>
  )
}

export default App
