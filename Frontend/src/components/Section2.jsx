import React, { useEffect, useState, useRef } from "react";
import bgImage from "../assets/sec2.png"; // background image (girl lying on bed)
import bubble1 from "../assets/bubble1.png";
import bubble2 from "../assets/bubble2.png";
import bubble3 from "../assets/bubble3.png";
import bubble4 from "../assets/bubble4.png";
import "./marquee.css"; // ✅ Import CSS

export default function Section2() {
  const [visible, setVisible] = useState([false, false, false, false]);
  const sectionRef = useRef(null); // 👈 to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // 👇 trigger animation sequence once
          const timers = [
            setTimeout(() => setVisible([true, false, false, false]), 300),
            setTimeout(() => setVisible([true, true, false, false]), 800),
            setTimeout(() => setVisible([true, true, true, false]), 1300),
            setTimeout(() => setVisible([true, true, true, true]), 1800),
          ];
          // stop observing after animation starts
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 } // 👈 triggers when 40% of component is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-screen bg-black relative overflow-hidden"
    >
      {/* ✅ Top Scrolling Bar */}
      <div className="w-full h-[100px] bg-[#FFD3DC] flex items-center overflow-hidden relative">
        <div className="marquee">
          <div className="marquee__inner">
            <span>DOES THIS SOUND LIKE YOU? ☺</span>
            <span>DOES THIS SOUND LIKE YOU? ☺</span>
            <span>DOES THIS SOUND LIKE YOU? ☺</span>
            <span>DOES THIS SOUND LIKE YOU? ☺</span>
          </div>
          <div className="marquee__inner">
            <span>DOES THIS SOUND LIKE YOU? ☺</span>
            <span>DOES THIS SOUND LIKE YOU? ☺</span>
            <span>DOES THIS SOUND LIKE YOU? ☺</span>
            <span>DOES THIS SOUND LIKE YOU? ☺</span>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative w-full h-[calc(100%-100px)]">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay Popups */}
        <img
          src={bubble1}
          alt="bubble1"
          className={`absolute left-[310px] top-[47px] w-[376px] h-[244.04px] transition-all duration-700 ease-out ${
            visible[0] ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
        <img
          src={bubble2}
          alt="bubble2"
          className={`absolute left-[322.63px] top-[258.03px] w-[343.78px] h-[230.31px] transition-all duration-700 ease-out ${
            visible[1] ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
        <img
          src={bubble3}
          alt="bubble3"
          className={`absolute left-[1080px] top-[113px] w-[312.01px] h-[224.95px] transition-all duration-700 ease-out ${
            visible[2] ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
        <img
          src={bubble4}
          alt="bubble4"
          className={`absolute left-[980px] top-[348px] w-[327.09px] h-[292.77px] transition-all duration-700 ease-out ${
            visible[3] ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
      </div>
    </div>
  );
}
