import React from "react";
import mobileGif from "../assets/mobile.gif"; // replace with actual gif path
import vectorImg from "../assets/vector.png"; // replace with actual circular vector path

export default function Swip() {
  return (
    <div className="w-full h-screen flex flex-col relative">
      {/* Top Bar */}
      <div className="h-[78px] w-full bg-[#FFD3DC] z-10 relative" />

      {/* Middle Section */}
      <div
        className="flex-1 w-full flex items-center justify-between px-20 relative"
        style={{
          background:
            "linear-gradient(90deg, #FEDFE6 12%, #FCF9E5 40%, #FCFBE5 100%, #FCFDE5 100%)",
        }}
      >
        {/* Left Side (Image + Mobile GIF) */}
        <div className="relative flex items-center justify-center w-2/3">
          {/* Vector Image */}
          <img
            src={vectorImg}
            alt="Vector"
            className="absolute w-[1035.99px] h-[1078.64px] object-contain"
          />
          {/* Mobile GIF */}
          <img
            src={mobileGif}
            alt="Mobile Preview"
            className="relative w-[350px] h-auto z-10"
          />
        </div>

        {/* Right Side (Text + Button) */}
        <div className="w-1/2 flex flex-col items-start text-left pl-5">
          {/* Titles */}
          <h1 className="font-['Instrument_Serif'] text-[88.93px] text-[#B8191D] leading-[1.1]">
            Swipe it.
          </h1>
          <h1 className="font-['Instrument_Serif'] text-[88.93px] text-[#865B46] leading-[1.1]">
            Shop it.
          </h1>
          <h1 className="font-['Instrument_Serif'] text-[88.93px] text-[#F17392] leading-[1.1] mb-4">
            Style it.
          </h1>

          {/* Paragraph */}
          <p className="font-['DM_Sans'] text-[30px] text-[#333] max-w-[700px] mb-7" 
          style={{
              fontSize: "clamp(15px, 2.5vw, 24px)", // balanced for all screens
            }}>
            Swipe to Discover and Find the Perfect Match. Swipe right to like,
            left to dislike and up to save to wishlist! The algorithm
            understands your preferences and tailors a feed just for you.
          </p>

          {/* Button */}
          <button className="bg-[#961B1E] text-white font-['DM_Sans'] text-[24px] px-10 py-2 rounded-full w-[260px]">
            Join waitlist
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="h-[78px] w-full bg-[#FFD3DC] z-10 relative" />
    </div>
  );
}
