// src/components/HeroSection.jsx
import React from "react";
import sampleVideo from "../assets/HeroVideo.mp4"; // replace later
import logo from "../assets/logo.png"; // replace later

const HeroSection = () => {
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
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#FFE4EB] to-white/20 flex items-center justify-between px-4 md:px-6
                   h-[80px] md:h-[111px]"
      >
        {/* Logo */}
        <div className="relative">
          <img
            src={logo}
            alt="Logo"
            className="w-[250px] md:w-[375px] h-auto md:h-[127.55px] relative -translate-x-8 translate-y-1 md:-translate-x-8 md:translate-y-1"
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-2 md:space-x-3">
          {/* Join Waitlist */}
          <button className="w-[150px] md:w-[205.21px] h-[48px] md:h-[64px] rounded-full bg-[#961B1E] text-white font-medium hover:bg-[#65493B] transition text-[19.93px]  ">
            Join waitlist
          </button>

          {/* Partner With Us */}
          <button className="w-[160px] md:w-[219.43px] h-[48px] md:h-[64px] rounded-full bg-[#3C2F2F] text-white font-medium hover:bg-[#2a2020] transition text-[19.93px] ">
            Partner with us
          </button>
        </div>
      </nav>

    </div>
  );
};

export default HeroSection;
