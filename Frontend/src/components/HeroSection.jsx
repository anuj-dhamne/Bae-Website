// src/components/HeroSection.jsx
import React from "react";
import sampleVideo from "../assets/HeroVideo.mp4";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={sampleVideo}
        autoPlay
        loop
        muted
      />

      {/* Overlay Navbar */}
      <nav
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#FFE4EB] to-white/20 flex items-center justify-between 
                   px-3 sm:px-4 md:px-6 h-[65px] sm:h-[80px] md:h-[111px]"
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-[130px] sm:w-[180px] md:w-[280px] h-auto"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Join Waitlist */}
          <button
            className="w-[100px] sm:w-[140px] md:w-[205px] h-[34px] sm:h-[45px] md:h-[64px] rounded-full bg-[#961B1E] 
                       text-white text-[12px] sm:text-[15px] md:text-[19px] font-medium hover:bg-[#65493B] transition"
            onClick={() => navigate("/waitlist")}
          >
            Join waitlist
          </button>

          {/* Partner With Us */}
          <button
            className="w-[110px] sm:w-[150px] md:w-[219px] h-[34px] sm:h-[45px] md:h-[64px] rounded-full bg-[#3C2F2F] 
                       text-white text-[12px] sm:text-[15px] md:text-[19px] font-medium hover:bg-[#2a2020] transition"
            onClick={() => navigate("/contact")}
          >
            Partner with us
          </button>
        </div>
      </nav>
    </div>
  );
};

export default HeroSection;
