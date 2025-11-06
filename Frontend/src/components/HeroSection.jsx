// src/components/HeroSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/new_logo_bae.PNG";

// Import both videos
import desktopVideo from "../assets/bae_web_vdeo.mp4";
import mobileVideo from "../assets/bae_mob_vdeo.mp4"; // <-- your new mobile version

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Videos */}
      {/* Desktop Video */}
      <video
        className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover"
        src={desktopVideo}
        playsInline
        muted
        autoPlay
        loop
        controls={false}
      />
      {/* Mobile Video */}
      <video
        className="block sm:hidden absolute top-0 left-0 w-full h-full object-cover"
        src={mobileVideo}
        playsInline
        muted
        autoPlay
        loop
        controls={false}
      />

      {/* Overlay Navbar */}
      <nav
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#FFE4EB] to-white/20 flex items-center justify-between 
                   px-2 sm:px-4 md:px-6 h-[60px] sm:h-[80px] md:h-[78px] overflow-x-auto no-scrollbar no-scroll"
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="w-[200px] sm:w-[250px] md:w-[350px] h-[165px] md:h-auto mt-4 -ml-10"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          {/* Join Waitlist */}
          <button
            className="w-[90px] sm:w-[130px] md:w-[180px] h-[32px] sm:h-[45px] md:h-[50px] rounded-full bg-[#961B1E] 
                       text-white text-[11px] sm:text-[15px] md:text-[19px] font-medium hover:bg-[#65493B] transition whitespace-nowrap"
            onClick={() => navigate("/waitlist")}
          >
            Join waitlist
          </button>

          {/* Partner With Us */}
          <button
            className="w-[105px] sm:w-[145px] md:w-[200px] h-[32px] sm:h-[45px] md:h-[50px] rounded-full bg-[#3C2F2F] 
                       text-white text-[11px] sm:text-[15px] md:text-[19px] font-medium hover:bg-[#2a2020] transition whitespace-nowrap"
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
