import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
const useTypingEffect = (text, speed = 50) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
};

export default function FashionBot() {
  const text =
    "Heere are a few college outfit recommendations tailored to flatter your body type and aesthetics.";
  const typedText = useTypingEffect(text, 40);

  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-b from-[#FFFFE6] to-[#FFCDD9] flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex justify-between px-24 pt-12">
        {/* Left Title */}
        <div className="max-w-[800px]">
          <h1 className="font-[Instrument_Serif] text-[#961B1E] text-[90px] leading-none">
            Ask me{" "} <br />
            <span className="italic text-[#961B1E]">anything</span>{" "}
            <span className="text-[90px] not-italic">BOT</span>
          </h1>
          <p className="font-[DM_Sans] text-[#543B2E] text-[25px] mt-6">
            From celeb looks to daily outfits, get instant style advice. Your
            fashion BFF whenever you’re stuck.
          </p>
        </div>

        {/* Right Chat Messages */}
        <div className="relative w-[600px] flex flex-col items-end gap-4">
          <motion.img
            src={msg1}
            alt="msg1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-[400px] h-[70px]"
          />
          <motion.img
            src={msg2}
            alt="msg2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="w-[467px] h-[70px]"
          />
          <div className="flex items-center gap-3">
            <img
              src={profilePic}
              alt="profile"
              className="w-[59px] h-[59px] rounded-full"
            />
            <motion.img
              src={msg3}
              alt="msg3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="w-[400px] h-[70px]"
            />
          </div>

        </div>
      </div>

      {/* Middle Typing Bar */}
      <div className="flex items-center gap-6 px-24 mt-10 mb-13">
        <img src={logo} alt="logo" className="w-[45px] h-[50px]" />
        <div className="w-full max-w-[1170px] h-[50px] bg-[#FFFFE6] rounded-lg flex items-center px-6">
          <p className="font-[DM_Sans] text-[#282827] text-[25px]">
            {typedText}
          </p>
        </div>
      </div>

      {/* Bottom Infinite Scroller */}
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
          {/* Duplicate for seamless loop */}
          {[model1, model2, model3, model4, model5, model6, model7].map(
            (model, idx) => (
              <img
                key={`dup-${idx}`}
                src={model}
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
