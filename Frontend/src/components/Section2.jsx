import React, { useEffect, useState } from "react";
import bgImage from "../assets/section2.png"; // background image (girl lying on bed)
import bubble1 from "../assets/bubble1.png";
import bubble2 from "../assets/bubble2.png";
import bubble3 from "../assets/bubble3.png";
import bubble4 from "../assets/bubble4.png";
import "./marquee.css"; // ✅ Import CSS

export default function Section2() {
  const [visible, setVisible] = useState([false, false, false, false]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisible([true, false, false, false]), 500),
      setTimeout(() => setVisible([true, true, false, false]), 1000),
      setTimeout(() => setVisible([true, true, true, false]), 1500),
      setTimeout(() => setVisible([true, true, true, true]), 2000),
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
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
        <img src={bgImage} alt="Background" className="w-full h-full object-cover" />

        {/* Overlay Popups */}
        <img
          src={bubble1}
          alt="bubble1"
          className={`absolute left-[280px] top-[47px] w-[446px] h-[244.04px] transition-all duration-700 ease-out ${
            visible[0] ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
        <img
          src={bubble2}
          alt="bubble2"
          className={`absolute left-[451.63px] top-[428.03px] w-[423.78px] h-[230.31px] transition-all duration-700 ease-out ${
            visible[1] ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
        <img
          src={bubble3}
          alt="bubble3"
          className={`absolute left-[1345px] top-[273px] w-[402.01px] h-[254.95px] transition-all duration-700 ease-out ${
            visible[2] ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
        <img
          src={bubble4}
          alt="bubble4"
          className={`absolute left-[1180px] top-[488px] w-[447.09px] h-[252.77px] transition-all duration-700 ease-out ${
            visible[3] ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
      </div>
    </div>
  );
}
