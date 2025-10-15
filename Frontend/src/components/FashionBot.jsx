import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import profilePic from "../assets/dp.png";
import msg1 from "../assets/msg1.png";
import msg2 from "../assets/msg2.png";
import msg3 from "../assets/msg3.png";
import logo from "../assets/gemini_logo.png";
import model1 from "../assets/model8.png";
import model2 from "../assets/model2.png";
import model3 from "../assets/model3.png";
import model4 from "../assets/model4.png";
import model5 from "../assets/model5.png";
import model6 from "../assets/model6.png";
import model7 from "../assets/model7.png";
import model8 from "../assets/model9.png";

// Typing effect hook
const useTypingEffect = (text, speed = 50, start = false) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, start]);

  return displayed;
};

export default function FashionBot() {
  const text =
    " Here are a few college outfit recommendations tailored to flatter your body type and aesthetic.";

  const [step, setStep] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const typedText = useTypingEffect(text, 40, inView);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setStep(1), 300);
      setTimeout(() => setStep(2), 1300);
      setTimeout(() => setStep(3), 2300);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="w-screen min-h-screen overflow-hidden bg-gradient-to-b from-[#FFFFE6] to-[#FFCDD9] flex flex-col justify-between"
    >
      {/* ---------- TOP SECTION ---------- */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end px-6 lg:px-24 pt-12">
        {/* Left Title */}
        <div className="max-w-[800px] text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="font-[Instrument_Serif] text-[#961B1E] text-[48px] sm:text-[65px] lg:text-[90px] leading-tight">
            Ask me <br />
            <span className="italic text-[#961B1E]">anything</span>{" "}
            <span className="not-italic">BOT</span>
          </h1>
          <p className="font-[DM_Sans] text-[#543B2E] text-[16px] sm:text-[20px] lg:text-[25px] mt-4">
            From celeb looks to daily outfits, get instant style advice.
            <br className="hidden lg:block" />
            Your fashion BFF whenever you’re stuck.
          </p>
        </div>

        {/* ---------- CHAT SECTION ---------- */}
<div className="relative w-full sm:w-[600px] lg:w-[600px] flex justify-center lg:justify-start items-end">
  {/* Static DP */}
  <div className="absolute left-2 sm:left-0 bottom-[3px] z-10">
    <img
      src={profilePic}
      alt="profile"
      className="w-[40px] h-[40px] sm:w-[55px] sm:h-[55px] rounded-full"
    />
  </div>

  {/* Messages (responsive height & width) */}
  <div className="ml-[65px] sm:ml-[80px] flex flex-col items-start justify-end gap-2 
                  h-[180px] sm:h-[220px] w-[85%] sm:w-[450px] overflow-hidden relative">

    {step >= 1 && (
      <motion.img
        src={msg1}
        alt="msg1"
        initial={{ y: 60, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[80%] sm:w-[400px] h-[50px] sm:h-[70px]"
      />
    )}

    {step >= 2 && (
      <motion.img
        src={msg2}
        alt="msg2"
        initial={{ y: 60, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-[85%] sm:w-[440px] h-[50px] sm:h-[70px]"
      />
    )}

    {step >= 3 && (
      <motion.img
        src={msg3}
        alt="msg3"
        initial={{ y: 60, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="w-[70%] sm:w-[345px] h-[50px] sm:h-[70px]"
      />
    )}
  </div>
</div>

      </div>

      {/* ---------- TYPING BAR (Gemini logo on left) ---------- */}
      <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 px-6 lg:px-24 mt-10 mb-6">
        {/* Gemini Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px]"
        />
        {/* Typing Box */}
        <div className="flex-1 bg-[#FFFFE6] rounded-lg flex items-center px-4 py-3 sm:h-[50px]">
          <p className="font-[DM_Sans] text-[#282827] text-[16px] sm:text-[22px] leading-snug">
            {typedText}
          </p>
        </div>
      </div>

      {/* ---------- SCROLLING MODELS ---------- */}
      <div className="w-full h-[250px] sm:h-[300px] lg:h-[370px] overflow-hidden mt-4 relative">
        <motion.div
          className="flex gap-8 sm:gap-12 min-w-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[model1, model2, model3, model4, model5, model6, model7, model8].map(
            (model, idx) => (
              <img
                key={idx}
                src={model}
                alt={`model-${idx}`}
                className="h-[200px] sm:h-[270px] object-contain shrink-0"
              />
            )
          )}
          {[model1, model2, model3, model4, model5, model6, model7, model8].map(
            (model, idx) => (
              <img
                key={`dup-${idx}`}
                src={model}
                alt={`model-${idx}`}
                className="h-[200px] sm:h-[270px] object-contain shrink-0"
              />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
