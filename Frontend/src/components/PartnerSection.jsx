import React from "react";
import partnerImg from "../assets/Partner.png"; // replace with your image

const PartnerSection = () => {
  return (
    <section
      className="w-full h-auto lg:h-screen flex items-center justify-center px-8 lg:px-24 py-12"
      style={{
        background:
          "linear-gradient(180deg, #FCFDE5 0%, #FFE0E6 54%, #FFE0E6 100%)",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1600px] h-full gap-10 lg:gap-0">
        {/* Left Side Image */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <img
            src={partnerImg}
            alt="Partner with us"
            className="w-[380px] md:w-[480px] lg:w-[560px] object-cover rounded-2xl"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-2xl px-6 lg:px-12">
          {/* Title */}
          <h2
            className="font-serif italic text-[#961B1E] leading-tight whitespace-nowrap"
            style={{
              fontSize: "clamp(36px, 6vw, 90px)",
            }}
          >
            Partner with Us
          </h2>

          {/* Paragraph */}
          <p
            className="mt-6 font-sans text-black leading-snug text-justify"
            style={{
              fontSize: "clamp(15px, 2.5vw, 26px)", // balanced for all screens
            }}
          >
            We’re building more than an e-commerce platform, we’re creating a
            community of women who shop by personal style. Partner with us to
            reach a curated audience, boost visibility, and grow your sales.
          </p>

          {/* Button */}
          <button
            className="mt-10 bg-[#961B1E] text-white font-sans font-medium rounded-full transition duration-300 hover:opacity-90"
            style={{
              width: "clamp(170px, 35vw, 340px)",
              height: "clamp(48px, 7vw, 68px)",
              fontSize: "clamp(13px, 2vw, 20px)",
            }}
          >
            Register your Brand
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
