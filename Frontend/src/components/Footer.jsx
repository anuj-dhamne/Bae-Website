import React from "react";
import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[400px] bg-[#961B1E] flex flex-col justify-between px-6 sm:px-10 md:px-14 py-10 sm:py-12 pt-16">
      {/* Top Section */}
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Heading */}
        <h2 className="font-['Instrument_Serif'] italic text-[28px] sm:text-[36px] md:text-[50px] text-white text-center md:text-left">
          Sign up for updates
        </h2>

        {/* Email Box + Socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Email Button */}
          <button
            onClick={() => navigate("/waitlist")}
            className="flex items-center bg-white rounded-lg px-5 py-3 sm:px-6 sm:py-4 w-full md:max-w-[500px] justify-between hover:scale-[1.02] transition-transform"
          >
            <span className="w-full text-left font-['Libre_Baskerville'] text-[#961B1E] text-[16px] sm:text-[18px] md:text-[24px]">
              Enter your email address
            </span>
            <span className="text-[#961B1E] text-[20px] sm:text-[22px] md:text-[26px] ml-2 sm:ml-4">
              →
            </span>
          </button>

          {/* Social Media */}
          <div className="flex gap-6 justify-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl sm:text-3xl hover:scale-110 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl sm:text-3xl hover:scale-110 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaPinterest className="text-white text-2xl sm:text-3xl hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider (visible only on mobile) */}
      <div className="border-t border-white/30 my-6 md:hidden"></div>

      {/* Bottom Section */}
      <div className="flex flex-row justify-between items-start pt-4 w-full">
        {/* Left side */}
        <p className="text-white font-['Libre_Baskerville'] text-[16px] sm:text-[18px] md:text-[24px]">
          © Copyright
        </p>

        {/* Right side (stacked vertically) */}
        <div className="flex flex-col gap-2 sm:gap-3 items-end">
          <Link
            to="/contact"
            className="text-white font-['Libre_Baskerville'] text-[16px] sm:text-[18px] md:text-[24px] hover:underline"
          >
            Contact us
          </Link>
          <Link
            to="/"
            className="text-white font-['Libre_Baskerville'] text-[16px] sm:text-[18px] md:text-[24px] hover:underline"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
}
