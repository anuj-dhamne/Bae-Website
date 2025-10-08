import React, {useState, useRef, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Section2 from "../components/Section2";
import MeetBae from "../components/MeetBae";
import Swip from "../components/Swip";
import FashionBot from "../components/FashionBot";
import PartnerSection from "../components/PartnerSection";
import FounderSection from "../components/FounderSection";
import Footer from "../components/Footer";

function Home() {
  const sections = [
    useRef(), // HeroSection
    useRef(), // Section2
    useRef(), // MeetBae
    useRef(), // Swip
    useRef(), // FashionBot
    useRef(), // PartnerSection
    useRef(), // FounderSection
    useRef(), // Footer
  ];
  const currentSection = useRef(0);
  const isScrolling = useRef(false);
  const founderScrollRef = sections[6]; // FounderSection ref

  const [founderAtBottom, setFounderAtBottom] = useState(false);
  const [founderAtTop, setFounderAtTop] = useState(true);

  useEffect(() => {
    // FounderSection internal scroll listener
    const founderEl = founderScrollRef.current;
    if (!founderEl) return;

    const onFounderScroll = () => {
      const isTop = founderEl.scrollTop === 0;
      const isBottom = founderEl.scrollHeight - founderEl.scrollTop === founderEl.clientHeight;
      setFounderAtTop(isTop);
      setFounderAtBottom(isBottom);
    };
    founderEl.addEventListener("scroll", onFounderScroll);
    return () => founderEl.removeEventListener("scroll", onFounderScroll);
  }, [founderScrollRef]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      // When user is in FounderSection (currentSection == 6)
      // allow scroll inside founder unless at top or bottom (then snap)
      if (currentSection.current === 6) {
        if(!(founderAtTop && e.deltaY < 0) && !(founderAtBottom && e.deltaY > 0)) {
          // Scroll inside FounderSection only
          return; 
        }
      }

      e.preventDefault();

      if (e.deltaY > 0 && currentSection.current < sections.length - 1) {
        currentSection.current += 1;
        isScrolling.current = true;
        sections[currentSection.current].current.scrollIntoView({ behavior: "smooth", block:"start" });
        setTimeout(() => (isScrolling.current = false), 900);
      } else if (e.deltaY < 0 && currentSection.current > 0) {
        currentSection.current -= 1;
        isScrolling.current = true;
        sections[currentSection.current].current.scrollIntoView({ behavior: "smooth", block:"start" });
        setTimeout(() => (isScrolling.current = false), 900);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [founderAtTop, founderAtBottom]);

  return (
    <div className="sections-wrapper">
      <div ref={sections[0]} className="fullscreen-section"><HeroSection /></div>
      <div ref={sections[1]} className="fullscreen-section"><Section2 /></div>
      <div ref={sections[2]} className="snap-section"><MeetBae /></div>
      <div ref={sections[3]} className="fullscreen-section"><Swip /></div>
      <div ref={sections[4]} className="fullscreen-section"><FashionBot /></div>
      <div ref={sections[5]} className="fullscreen-section"><PartnerSection /></div>
      <div ref={sections[6]} className="founder-section" style={{maxHeight: '100vh', overflowY: 'auto', scrollSnapAlign: 'start'}} >
        <FounderSection />
      </div>
      <div ref={sections[7]} className="snap-section"><Footer /></div>
    </div>
  );
}

export default Home;
