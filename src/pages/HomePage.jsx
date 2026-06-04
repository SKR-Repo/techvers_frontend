import React from 'react'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Projects from '../components/sections/Projects'
import WhyChoose from '../components/sections/WhyChoose'
import Process from '../components/sections/Process'
import Team from '../components/sections/Team'
import CTA from '../components/sections/Cta.jsx'

const HomePage = () => {
  return (
    <>
        <Hero />
        <Services />
        <Projects />
        <WhyChoose />
        <Process />
        <Team />
        <CTA />
    </>
  )
}

export default HomePage