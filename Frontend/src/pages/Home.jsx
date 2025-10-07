import React from 'react'
import HeroSection from '../components/HeroSection'
import Section2 from '../components/Section2'
import MeetBae from '../components/MeetBae'
import Swip from '../components/Swip'
import FashionBot from '../components/FashionBot'
import PartnerSection from '../components/PartnerSection'
import FounderSection from '../components/FounderSection'
import Footer from '../components/Footer'

function Home() {
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

export default Home