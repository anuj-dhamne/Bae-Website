import { useState } from 'react'

import HeroSection from './components/HeroSection'
import Section2 from './components/Section2'
import PartnerSection from './components/PartnerSection'
import FounderSection from './components/FounderSection'
import Footer from './components/Footer'
import MarqueeTest from './components/MarqueeTest'
import Swip from './components/Swip'
import FashionBot from './components/FashionBot'
import MeetBae from './components/MeetBae'

function App() {

  return (
    <>
     <HeroSection/>
     <Section2/>
     <MeetBae/>
     <Swip/>
     <FashionBot/>
     <PartnerSection/>
     <FounderSection/>
     <Footer/>
    </>
  )
}

export default App
