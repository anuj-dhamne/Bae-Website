import React from "react";
import HeroSection from "../components/HeroSection";
import Section2 from "../components/Section2";
import MeetBae from "../components/MeetBae";
import Swip from "../components/Swip";
import FashionBot from "../components/FashionBot";
import PartnerSection from "../components/PartnerSection";
import FounderSection from "../components/FounderSection";
import Footer from "../components/Footer";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";

function Home() {
  return (
    <>
      <ScrollAnimationWrapper>
        <HeroSection />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={0.2}>
        <Section2 />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={0.3}>
        <MeetBae />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={0.4}>
        <Swip />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={0.5}>
        <FashionBot />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={0.6}>
        <PartnerSection />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={0.7}>
        <FounderSection />
      </ScrollAnimationWrapper>

      <Footer />
    </>
  );
}

export default Home;
