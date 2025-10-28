import React from "react";

import founder from "../assets/founder.png";
import standing from "../assets/standing.png";
import working from "../assets/working.png";

export default function FounderSection() {
  return (
    <div
      className="w-full flex flex-col items-center px-6 lg:px-20 py-16"
      style={{
        background: "linear-gradient(180deg, #FCF9E4 0%, #FEE5E6 24%, #FEE5E6 100%)",
      }}
    >
      {/* Desktop layout */}
      <div className="hidden lg:flex flex-col w-full max-w-[1920px]">
        {/* Meet the Founder Section */}
        <div className="flex flex-row justify-between items-start mb-20">
          {/* Left Text */}
          <div className="flex-1 lg:pr-16">
            <h1
              className="font-['Instrument_Serif'] text-[#961B1E] leading-tight mb-4"
              style={{ fontSize: "clamp(36px, 6vw, 90px)" }}
            >
              MEET THE FOUNDER
            </h1>
            <h2
              className="font-['Italianno'] text-[#65493B] mb-6"
              style={{ fontSize: "clamp(28px, 5vw, 70px)" }}
            >
              Asshna Punjabi (She/her)
            </h2>
            <p
              className="font-['DM_Sans'] text-[#282827] leading-relaxed max-w-[700px]"
              style={{ fontSize: "clamp(15px, 2.5vw, 26px)" }}
            >
              Meet Asshna Punjabi a fashion influencer and enthusiast on a mission to make shopping fun, personalized, and gamified. Frustrated with endless scrolling and outfits that didn’t match  her vibe, she built BAE: your style best friend helping you discover looks that match your aesthetic, occasion, and body type. Join her and be a part of the future of online shopping.
            </p>
          </div>

          {/* Right Images */}
          <div className="flex flex-row items-end gap-6 mt-20">
            <img
              src={working}
              alt="Founder working"
              className="w-[285px] h-[412px] object-cover rounded-lg shadow-md relative top-4"
            />
            <img
              src={standing}
              alt="Founder standing"
              className="w-[285px] h-[412px] object-cover rounded-lg shadow-md relative top-25"
            />
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="flex flex-row justify-between items-center gap-10">
          {/* Left Image */}
          <div className="flex-shrink-0">
            <img
              src={founder}
              alt="Founder portrait"
              className="w-[639px] h-[575px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Text */}
          <div className="flex-1 lg:pl-16">
            <h1
              className="font-['Instrument_Serif'] text-[#961B1E] leading-tight mb-6"
              style={{ fontSize: "clamp(36px, 6vw, 90px)" }}
            >
              VISION AND MISSION
            </h1>
            <p
              className="font-['DM_Sans'] text-[#282827] leading-relaxed max-w-[800px]"
              style={{ fontSize: "clamp(15px, 2.5vw, 26px)" }}
            >
              {/* Meet Asshna Punjabi, a social media influencer and a fashion enthusiast,
              on a mission to make shopping more fun, personalized and gamified.
              <br /> */}
              <br />
             We believe fashion is one of the biggest forms of self-expression and every girl deserves to wear outfits that look and feel like her. We want discovery to feel fun again and to bring both discovery and purchase together on one platform. We aim to scale this to India’s largest online shopping app.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet layout */}
      <div className="flex flex-col w-full max-w-[1920px] lg:hidden gap-12">
        {/* Meet the Founder Text Box */}
        <div className="text-center px-4 ">
          <h1
            className="font-['Instrument_Serif'] text-[#961B1E] leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 6vw, 60px)" }}
          >
            MEET THE FOUNDER
          </h1>
          <h2
            className="font-['Italianno'] text-[#65493B] mb-3"
            style={{ fontSize: "clamp(30px, 5vw, 40px)" }}
          >
            Asshna Punjabi (She/her)
          </h2>
          <p
            className="font-['DM_Sans'] text-[#282827] leading-relaxed"
             style={{
              fontSize: "clamp(14px, 2.5vw, 26px)",
            }}
          >
            Meet Asshna Punjabi a fashion influencer and enthusiast on a mission to make shopping fun, personalized, and gamified. Frustrated with endless scrolling and outfits that didn’t match  her vibe, she built BAE: your style best friend helping you discover looks that match your aesthetic, occasion, and body type. Join her and be a part of the future of online shopping.
          </p>
        </div>

        {/* Two Images side by side */}
        <div className="flex justify-center items-center gap-4 px-2">
          <img
            src={working}
            alt="Founder working"
            className="w-[45%] object-cover rounded-lg shadow-md"
          />
          <img
            src={standing}
            alt="Founder standing"
            className="w-[45%] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Vision and Mission Text Box */}
        <div className="text-center px-4">
          <h1
            className="font-['Instrument_Serif'] text-[#961B1E] leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 5vw, 50px)" }}
          >
            VISION AND MISSION
          </h1>
          <p
            className="font-['DM_Sans'] text-[#282827] leading-relaxed"
             style={{
              fontSize: "clamp(14px, 2.5vw, 26px)",
            }}
          >
            {/* Meet Asshna Punjabi, a social media influencer and a fashion enthusiast,
            on a mission to make shopping more fun, personalized and gamified.
            <br /> */}
            <br />
            We believe fashion is one of the biggest forms of self-expression and every girl deserves to wear outfits that look and feel like her. We want discovery to feel fun again and to bring both discovery and purchase together on one platform. We aim to scale this to India’s largest online shopping app.
          </p>
        </div>

        {/* Founder Portrait Image */}
        <div className="flex justify-center px-2">
          <img
            src={founder}
            alt="Founder portrait"
            className="w-[90%] sm:w-[70%] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
