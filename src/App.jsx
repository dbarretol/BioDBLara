import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './sections/Header'
import Contactdetails from './sections/Contactdetails'
import Keywords from './sections/Keywords'
import ProfesionalProfile from './sections/ProfesionalProfile'
import AcademicMain from './sections/AcademicMain'
import AcademicComplement from './sections/AcademicComplement'
import Experience from './sections/Experience'
import ExperienceProject from './sections/ExperienceProject'
import OtherActivities from './sections/OtherActivities'
import Certifications from './sections/Certifications'
import DigitalSkills from './sections/DigitalSkills'
import Languages from './sections/Languages'

function App() {
  
  return (
    <>
      <Header />
      <Keywords />
      <hr></hr>
      <Contactdetails />
      <ProfesionalProfile />
      <AcademicMain />
      <AcademicComplement />
      <Experience />
      <ExperienceProject />
      <OtherActivities />
      <Certifications />
      <DigitalSkills />
      <Languages />
    </>
  )
}

export default App
