import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import profilePic from "../assets/dp.png";
import msg1 from "../assets/msg1.png";
import msg2 from "../assets/msg2.png";
import msg3 from "../assets/msg3.png";
import logo from "../assets/gemini_logo.png";
import model1 from "../assets/model1.png";
import model2 from "../assets/model1.png";
import model3 from "../assets/model1.png";
import model4 from "../assets/model1.png";
import model5 from "../assets/model1.png";
import model6 from "../assets/model1.png";
import model7 from "../assets/model1.png";

// Typing animation hook
const useTypingEffect = (text, speed = 50, start = false) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) return; // Only start typing when start = true

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
    "HHere are a few college outfit recommendations tailored to flatter your body type and aesthetics.";

  const [step, setStep] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const typedText = useTypingEffect(text, 40, inView); // Start typing only when in view

  // Start chat message animation sequence
  useEffect(() => {
    if (inView) {
      setTimeout(() => setStep(1), 300); // msg1 appears
      setTimeout(() => setStep(2), 1300); // msg2 appears
      setTimeout(() => setStep(3), 2300); // msg3 appears
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="w-screen h-screen overflow-hidden bg-gradient-to-b from-[#FFFFE6] to-[#FFCDD9] flex flex-col justify-between"
    >
      {/* Top Section */}
      <div className="flex justify-between items-end px-24 pt-12">
        {/* Left Title */}
        <div className="max-w-[800px]">
          <h1 className="font-[Instrument_Serif] text-[#961B1E] text-[90px] leading-none">
            Ask me <br />
            <span className="italic text-[#961B1E]">anything</span>{" "}
            <span className="text-[90px] not-italic">BOT</span>
          </h1>
          <p className="font-[DM_Sans] text-[#543B2E] text-[25px] mt-6">
            From celeb looks to daily outfits, get instant style
            <br />
            advice. Your fashion BFF whenever you’re stuck.
          </p>
        </div>

        {/* Chat Section */}
        <div className="relative w-[600px] h-[280px] flex justify-start items-end">
          {/* Static DP */}
          <div className="z-10 mb-[20px]">
            <img
              src={profilePic}
              alt="profile"
              className="w-[59px] h-[59px] rounded-full"
            />
          </div>

          {/* Chat Messages Container */}
          <div className="ml-4 flex flex-col items-start justify-end gap-3 h-[180px] w-[450px] overflow-visible mb-[20px]">
            {/* msg1 */}
            {step >= 1 && (
              <motion.img
                src={msg1}
                alt="msg1"
                initial={{ y: 40, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-[400px] h-[70px]"
              />
            )}

            {/* msg2 */}
            {step >= 2 && (
              <motion.img
                src={msg2}
                alt="msg2"
                initial={{ y: 40, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-[440px] h-[70px]"
              />
            )}

            {/* msg3 */}
            {step >= 3 && (
              <motion.img
                src={msg3}
                alt="msg3"
                initial={{ y: 40, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-[420px] h-[70px]"
              />
            )}
          </div>
        </div>
      </div>

      {/* Typing Bar */}
      <div className="flex items-center gap-6 px-24 mt-10 mb-13">
        <img src={logo} alt="logo" className="w-[45px] h-[50px]" />
        <div className="w-full max-w-[1170px] h-[50px] bg-[#FFFFE6] rounded-lg flex items-center px-6">
          <p className="font-[DM_Sans] text-[#282827] text-[25px]">
            {typedText}
          </p>
        </div>
      </div>

      {/* Scrolling Models */}
      <div className="w-full h-[370px] overflow-hidden mt-6 relative">
        <motion.div
          className="flex gap-12 min-w-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[model1, model2, model3, model4, model5, model6, model7].map(
            (model, idx) => (
              <img
                key={idx}
                src={model}
                alt={`model-${idx}`}
                className="h-[200px] object-contain shrink-0"
              />
            )
          )}
          {[model1, model2, model3, model4, model5, model6, model7].map(
            (model, idx) => (
              <img
                key={`dup-${idx}`}
                src={model1}
                alt={`model-${idx}`}
                className="h-[200px] object-contain shrink-0"
              />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
