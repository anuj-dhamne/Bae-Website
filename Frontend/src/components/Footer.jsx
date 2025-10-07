import React from "react";
import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[600px] bg-[#961B1E] flex flex-col justify-between px-14 py-12 pt-20">
      {/* Top Section */}
      <div className="flex flex-col gap-8">
        {/* Heading */}
        <h2 className="font-['Instrument_Serif'] italic text-[36px] md:text-[50px] text-white">
          Sign up for updates
        </h2>

        {/* Email Box as a Button + Socials in One Line */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Entire box is clickable */}
          <button
            onClick={() => navigate("/waitlist")}
            className="flex items-center bg-white rounded-lg px-6 py-4 w-full md:max-w-[500px] justify-between hover:scale-[1.02] transition-transform"
          >
            <span className="w-full text-left font-['Libre_Baskerville'] text-[#961B1E] text-[18px] md:text-[24px]">
              Enter your email address
            </span>
            <span className="text-[#961B1E] text-[22px] md:text-[26px] ml-4">
              →
            </span>
          </button>

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
          <Link
            to="/contact"
            className="text-white font-['Libre_Baskerville'] text-[18px] md:text-[24px] hover:underline"
          >
            Contact us
          </Link>
          <Link
            to="/"
            className="text-white font-['Libre_Baskerville'] text-[18px] md:text-[24px] hover:underline"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
}
