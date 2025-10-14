import React from "react";
import modelGif from "../assets/model.gif"; // replace with your GIF/image

export default function MeetBae() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Top pink bar */}
      <div className="h-[60px] sm:h-[78px] w-full bg-[#FFD3DC]" />

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left side (Text Section + Reordered Mobile Layout) */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col">
          {/* Title */}
          <div className="p-6 sm:p-8 lg:ml-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1
              className="italic text-[#961B1E] font-normal leading-tight
              text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px]"
              style={{ fontFamily: "Instrument Serif, serif" }}
            >
              Meet BAE — Your AI powered <br className="hidden sm:block" /> fashion
              matchmaker
            </h1>
          </div>

          {/* 👇 Pink GIF section - shown only on Mobile */}
          <div className="bg-[#FFE4EB] flex items-center justify-center py-8 sm:py-10 lg:hidden">
            <img
              src={modelGif}
              alt="Fashion Model"
              className="max-h-[350px] sm:max-h-[450px] w-auto object-contain"
            />
          </div>

          {/* Yellow Content Box */}
          <div className="bg-[#FFFFE2] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-7 mb-10 sm:mb-12">
            {[
              {
                num: "01",
                color: "#CC99D8",
                title: "Handpicked Brands, All in One",
                desc: "Find unique, curated brands you won’t see in the same old scroll.",
              },
              {
                num: "02",
                color: "#E96983",
                title: "Swipe to Curate your feed",
                desc: "Swipe right to like, left to dislike and build a style feed that feels 100% you.",
              },
              {
                num: "03",
                color: "#BB9683",
                title: "Personalized fashion",
                desc: "Outfits tailored to your vibe, occasion and body type.",
              },
              {
                num: "04",
                color: "#BD797A",
                title: "Ask me Anything Chatbot",
                desc: "Like that one friend who always knows what suits you — from outfits to brands you’ll love.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-3 sm:gap-4">
                <div className="flex gap-4 sm:gap-6 items-start ml-4 sm:ml-7">
                  <h2
                    className="italic shrink-0 text-[50px] sm:text-[60px] md:text-[70px]"
                    style={{
                      fontFamily: "Judson, serif",
                      color: item.color,
                    }}
                  >
                    {item.num}
                  </h2>
                  <div>
                    <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#65493B]">
                      {item.title}
                    </h3>
                    <p className="text-[16px] sm:text-[20px] md:text-[22px] font-light text-[#65493B]">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {i !== 3 && (
                  <hr className="border-t border-[#65493B] w-full ml-4 sm:ml-7" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right side (GIF Section for Desktop) */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-[#FFE4EB] items-center justify-center py-8 sm:py-12">
          <img
            src={modelGif}
            alt="Fashion Model"
            className="max-h-[600px] lg:max-h-[800px] w-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom pink bar */}
      <div className="h-[60px] sm:h-[78px] w-full bg-[#FFD3DC] z-10 relative" />
    </div>
  );
}
