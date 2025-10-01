import React from "react";
import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full min-h-[600px] bg-[#961B1E] flex flex-col justify-between px-14 py-12 pt-20">
      {/* Top Section */}
      <div className="flex flex-col gap-8">
        {/* Heading */}
        <h2 className="font-['Instrument_Serif'] italic text-[36px] md:text-[50px] text-white">
          Sign up for updates
        </h2>

        {/* Email Input + Button + Socials in One Line */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Email Box */}
          <div className="flex items-center bg-white rounded-lg px-6 py-4 w-full md:max-w-[500px] justify-between">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full outline-none font-['Libre_Baskerville'] text-[#961B1E] text-[18px] md:text-[24px] placeholder-[#961B1E]"
            />
            <button className="text-[#961B1E] text-[22px] md:text-[26px] ml-4">
              →
            </button>
          </div>

          {/* Social Media */}
          <div className="flex gap-6 justify-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-3xl hover:scale-110 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-3xl hover:scale-110 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaPinterest className="text-white text-3xl hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
        <p className="text-white font-['Libre_Baskerville'] text-[18px] md:text-[24px]">
          © Copyright
        </p>
        <div className="flex gap-8">
          <a
            href="#"
            className="text-white font-['Libre_Baskerville'] text-[18px] md:text-[24px] hover:underline"
          >
            Contact us
          </a>
          <a
            href="#"
            className="text-white font-['Libre_Baskerville'] text-[18px] md:text-[24px] hover:underline"
          >
            Privacy policy
          </a>
        </div>
      </div>
    </div>
  );
}
