import React, { useEffect, useState, useRef } from "react";
import bgImage from "../assets/sec2.png";
import bubble1 from "../assets/bubble1.png";
import bubble2 from "../assets/bubble2.png";
import bubble3 from "../assets/bubble3.png";
import bubble4 from "../assets/bubble4.png";
import "./marquee.css";

export default function Section2() {
  const [visible, setVisible] = useState([false, false, false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const timers = [
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
      <div className="w-full h-[80px] bg-[#FFD3DC] flex items-center overflow-hidden relative">
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

      {/* ✅ Background Image */}
      <div className="relative w-full h-[calc(100%-80px)]">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover object-center md:object-[center_top]"
        />

{/* ✅ Bubble 1 */}
<img
  src={bubble1}
  alt="bubble1"
  className={`absolute transition-all duration-700 ease-out
    ${visible[0] ? "opacity-100 scale-100" : "opacity-0 scale-75"}
    w-[70%] sm:w-[60%] md:w-[376px]
    left-[3%] top-[6%] sm:left-[8%] sm:top-[10%] md:left-[310px] md:top-[47px]
  `}
/>

{/* ✅ Bubble 2 */}
<img
  src={bubble2}
  alt="bubble2"
  className={`absolute transition-all duration-700 ease-out
    ${visible[1] ? "opacity-100 scale-100" : "opacity-0 scale-75"}
    w-[65%] sm:w-[55%] md:w-[343.78px]
    left-[3%] top-[43%] sm:left-[18%] sm:top-[32%] md:left-[322.63px] md:top-[258.03px]
  `}
/>

{/* ✅ Bubble 3 */}
<img
  src={bubble3}
  alt="bubble3"
  className={`absolute transition-all duration-700 ease-out
    ${visible[2] ? "opacity-100 scale-100" : "opacity-0 scale-75"}
    w-[60%] sm:w-[50%] md:w-[312.01px]
    right-[2%] top-[25%] sm:right-[8%] sm:top-[18%] md:left-[1080px] md:top-[113px]
  `}
/>

{/* ✅ Bubble 4 */}
<img
  src={bubble4}
  alt="bubble4"
  className={`absolute transition-all duration-700 ease-out
    ${visible[3] ? "opacity-100 scale-100" : "opacity-0 scale-75"}
    w-[65%] sm:w-[55%] md:w-[327.09px]
    right-[2%] bottom-[10%] sm:right-[8%] sm:bottom-[12%] md:left-[980px] md:top-[348px]
  `}
/>

      </div>
    </div>
  );
}
