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
        className="flex-1 w-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #FEDFE6 12%, #FCF9E5 40%, #FCFBE5 100%, #FCFDE5 100%)",
        }}
      >
        {/* 👇 MOBILE VIEW GRADIENT (bottom pink to top cream) */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: "linear-gradient(0deg, #FFD3DC 0%, #FCFDE5 100%)",
          }}
        ></div>

        {/* LEFT SECTION (Vector + Mobile GIF) */}
        <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 py-8 md:py-0 z-10">
          {/* Vector Image - Desktop only */}
          <img
            src={vectorImg}
            alt="Vector"
            className="hidden md:block absolute w-[900px] h-auto object-contain"
          />

          {/* ✅ Add Mobile GIF for Desktop view (centered above vector) */}
          <img
            src={mobileGif}
            alt="Mobile Preview Desktop"
            className="hidden md:block relative z-10 w-[360px] h-auto object-contain mt-[20px]"
          />

          {/* Mobile Version (unchanged) */}
          <div className="relative flex flex-col items-center justify-center md:hidden">
            {/* Vector Image - Mobile */}
            <img
              src={vectorImg}
              alt="Vector Mobile"
              className="w-[360px] sm:w-[400px] h-auto object-contain relative z-0"
            />
            <img
              src={mobileGif}
              alt="Mobile Preview"
              className="absolute top-2/3 -translate-y-[55%] w-[260px] sm:w-[300px] h-auto object-contain z-10"
            />
          </div>
        </div>

        {/* RIGHT SECTION (Text + Button) */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 px-6 sm:px-10 md:px-16 py-10 md:py-0">
          {/* Titles */}
          <div className="space-y-2 sm:space-y-3 mb-5 md:mb-6">
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
                       transition-transform hover:scale-105"
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
