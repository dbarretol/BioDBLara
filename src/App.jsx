import { useState } from 'react'
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
import Interests from './sections/Interests'

function App() {
  
  return (
    <>
      <Header />
      <Keywords />
      <Contactdetails />
      <ProfesionalProfile />
      <Interests />
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