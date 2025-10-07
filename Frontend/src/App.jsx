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
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Waitlist from './pages/Waitlist'
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
        {/* <Home/> */}
     {/* <ContactUs/> */}
     {/* <Waitlist/> */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/waitlist" element={<Waitlist />} />
    </Routes>


    </>
  )
}

export default App
