import React, { useEffect, useState, useRef } from "react";
import bgImageDesktop from "../assets/sec2.png"; // desktop background
import bgImageMobile from "../assets/sec2Mobile.png"; // mobile background

// bubbles
import bubble1 from "../assets/bubble1.png";
import bubble2 from "../assets/bubble2.png";
import bubble3 from "../assets/bubble3.png";
import bubble4 from "../assets/bubble4.png";
import bubble3Mobile from "../assets/bubble3Mobile.png"; // mobile version
import bubble1Mobile from "../assets/bubble1Mobile.png"; // mobile version
import bubble2Mobile from "../assets/bubble2Mobile.png"; // mobile version
import bubble4Mobile from "../assets/bubble4Mobile.png"; // mobile version

import "./marquee.css";

export default function Section2() {
  const [visible, setVisible] = useState([false, false, false, false]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          [
            setTimeout(() => setVisible([true, false, false, false]), 300),
            setTimeout(() => setVisible([true, true, false, false]), 800),
            setTimeout(() => setVisible([true, true, true, false]), 1300),
            setTimeout(() => setVisible([true, true, true, true]), 1800),
          ];
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full h-screen bg-black relative overflow-hidden">
      {/* ✅ Top Scrolling Bar */}
      <div className="w-full h-[80px] md:h-[80px] bg-[#FFD3DC] flex items-center overflow-hidden relative ">
        <div className="marquee">
          <div className="marquee__inner">
            <span>DOES THIS SOUND LIKE YOU? </span>
            <span>DOES THIS SOUND LIKE YOU? </span>
            <span>DOES THIS SOUND LIKE YOU? </span>
            <span>DOES THIS SOUND LIKE YOU? </span>
          </div>
          <div className="marquee__inner">
            <span>DOES THIS SOUND LIKE YOU? </span>
            <span>DOES THIS SOUND LIKE YOU? </span>
            <span>DOES THIS SOUND LIKE YOU? </span>
            <span>DOES THIS SOUND LIKE YOU? </span>
          </div>
        </div>
      </div>

      {/* ✅ Background Image */}
      <div className="relative w-full h-[calc(100%-80px)]">
        <picture>
          <source media="(max-width: 768px)" srcSet={bgImageMobile} />
          <img
            src={bgImageDesktop}
            alt="Background"
            className="w-full h-full object-cover object-center md:object-[center_top]"
          />
        </picture>

        {/* ✅ Bubble 1 */}
        <img
          src={isMobile ? bubble1Mobile : bubble1}
          alt="bubble1"
          className={`absolute transition-all duration-700 ease-out
            ${visible[0] ? "opacity-100 scale-100" : "opacity-0 scale-75"}
            w-[70%] sm:w-[60%] md:w-[36%] lg:w-[28%]
            ${isMobile
              ? "left-[2%] top-[3%]" // 📱 mobile layout
              : "left-[22%] top-[8%]"} // 💻 desktop layout
          `}
        />

        {/* ✅ Bubble 2 */}
        <img
          src={isMobile ? bubble2Mobile : bubble2}
          alt="bubble2"
          className={`absolute transition-all duration-700 ease-out
            ${visible[1] ? "opacity-100 scale-100" : "opacity-0 scale-75"}
            w-[65%] sm:w-[55%] md:w-[34%] lg:w-[26%]
            ${isMobile
              ? "left-[-1%] top-[19%]" // 📱 below and slightly right
              : "left-[26%] top-[45%]"} // 💻 desktop layout
          `}
        />

        {/* ✅ Bubble 3 */}
        <img
          src={isMobile ? bubble3Mobile : bubble3}
          alt="bubble3"
          className={`absolute transition-all duration-700 ease-out
            ${visible[2] ? "opacity-100 scale-100" : "opacity-0 scale-75"}
            w-[60%] sm:w-[50%] md:w-[30%] lg:w-[24%]
            ${isMobile
              ? "left-[-2%] top-[41%]" // 📱 diagonally lower right
              : "right-[9%] top-[14%]"} // 💻 desktop layout
          `}
        />

        {/* ✅ Bubble 4 */}
        <img
          src={isMobile ? bubble4Mobile : bubble4}
          alt="bubble4"
          className={`absolute transition-all duration-700 ease-out
            ${visible[3] ? "opacity-100 scale-100" : "opacity-0 scale-75"}
            w-[65%] sm:w-[55%] md:w-[32%] lg:w-[26%]
            ${isMobile
              ? "left-[2%] bottom-[13%]" // 📱 last bubble near bottom right
              : "right-[7%] bottom-[2%]"} // 💻 desktop layout
          `}
        />
      </div>
    </div>
  );
}
