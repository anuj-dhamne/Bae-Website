import React from "react";
import mobileGif from "../assets/mobile.gif";
import vectorImg from "../assets/vector.png";
import { useNavigate } from "react-router-dom";

export default function Swip() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      {/* Top Bar */}
      <div className="h-[78px] w-full bg-[#FFD3DC] z-10" />

      {/* Main Section */}
      <div
        className="flex-1 w-full flex flex-col md:flex-row items-center justify-between 
                   relative overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #FEDFE6 12%, #FCF9E5 40%, #FCFBE5 100%, #FCFDE5 100%)",
        }}
      >
        {/* Mobile View Gradient (top→bottom) */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, #FFD3DC 0%, #FCFDE5 100%)",
          }}
        ></div>

        {/* Left Section (Vector + Mobile GIF) */}
        <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 pt-8 pb-4 md:py-0 z-10">
          {/* Vector Image (desktop only) */}
          <img
            src={vectorImg}
            alt="Vector"
            className="hidden md:block absolute w-[900px] h-auto object-contain"
          />

          {/* Mobile GIF */}
          <img
            src={mobileGif}
            alt="Mobile Preview"
            className="relative w-[280px] sm:w-[320px] md:w-[350px] h-auto z-10 mx-auto"
          />
        </div>

        {/* Right Section (Text + Button) */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 px-6 sm:px-10 md:px-16 pt-4 md:pt-0 pb-10 md:pb-20">
          {/* Titles */}
          <div className="space-y-1 sm:space-y-2 md:space-y-1 mb-4 md:mb-5">
            <h1 className="font-['Instrument_Serif'] italic text-[#B8191D] text-[48px] sm:text-[60px] md:text-[88.93px] leading-[0.95] md:leading-[0.9]">
              Swipe it.
            </h1>
            <h1 className="font-['Instrument_Serif'] italic text-[#865B46] text-[48px] sm:text-[60px] md:text-[88.93px] leading-[0.95] md:leading-[0.9]">
              Shop it.
            </h1>
            <h1 className="font-['Instrument_Serif'] italic text-[#F17392] text-[48px] sm:text-[60px] md:text-[88.93px] leading-[0.95] md:leading-[0.9]">
              Style it.
            </h1>
          </div>

          {/* Paragraph */}
          <p
            className="font-['DM_Sans'] text-[#333] mb-6 md:mb-8 max-w-[700px]"
            style={{
              fontSize: "clamp(15px, 2.5vw, 24px)",
            }}
          >
            Swipe to Discover and Find the Perfect Match. Swipe right to like,
            left to dislike and up to save to wishlist! The algorithm
            understands your preferences and tailors a feed just for you.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/waitlist")}
            className="bg-[#961B1E] text-white font-['DM_Sans'] text-[18px] sm:text-[20px] md:text-[24px]
                       px-8 sm:px-10 py-2 sm:py-3 rounded-full w-[200px] sm:w-[240px] md:w-[260px]
                       transition-transform hover:scale-105 mt-2 md:mt-4 mb-6 md:mb-12"
          >
            Join waitlist
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="h-[78px] w-full bg-[#FFD3DC] z-10" />
    </div>
  );
}
