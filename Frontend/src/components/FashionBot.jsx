import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/dp.png"; // 59x59 circular profile
import msg1 from "../assets/msg1.png"; // 507x96
import msg2 from "../assets/msg2.png"; // 567x96
import msg3 from "../assets/msg3.png"; // 465x96
import logo from "../assets/gemini_logo.png"; // 72x72
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
    "Here are a few college outfit recommendations tailored to flatter your body type and aesthetic";
  const typedText = useTypingEffect(text, 40);

  return (
    <div className="w-[1920px] h-[1080px] overflow-hidden bg-gradient-to-b from-[#FFFFE6] via-[#FFFFE6] to-[#FFCDD9] relative">
      {/* Top Section */}
      <div className="flex justify-between px-24 pt-16">
        {/* Left Title */}
        <div className="max-w-[800px]">
          <h1 className="font-[Instrument_Serif] text-[#961B1E] text-[120px] leading-none">
            Ask me{" "}
            <span className="italic text-[#961B1E]">anything</span>{" "}
            <span className="text-[110px] not-italic">BOT</span>
          </h1>
          <p className="font-[DM_Sans] text-[#543B2E] text-[30px] mt-6">
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
            className="w-[507px] h-[96px]"
          />
          <div className="flex items-center gap-3">
            <img
              src={profilePic}
              alt="profile"
              className="w-[59px] h-[59px] rounded-full"
            />
            <motion.img
              src={msg2}
              alt="msg2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-[567px] h-[96px]"
            />
          </div>
          <motion.img
            src={msg3}
            alt="msg3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="w-[465px] h-[96px]"
          />
        </div>
      </div>

      {/* Middle Typing Bar */}
      <div className="flex items-center gap-6 px-24 mt-12">
        <img src={logo} alt="logo" className="w-[72px] h-[72px]" />
        <div className="w-[1582px] h-[78px] bg-[#FFFFE6] rounded-lg flex items-center px-6">
          <p className="font-[DM_Sans] text-[#282827] text-[30px]">
            {typedText}
          </p>
        </div>
      </div>

      {/* Bottom Infinite Scroller */}
      <div className="absolute bottom-0 w-full h-[370px] overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[model1, model2, model3, model4, model5, model6, model7].map(
            (model, idx) => (
              <img
                key={idx}
                src={model}
                alt={`model-${idx}`}
                className="h-[370px] object-contain"
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
                className="h-[370px] object-contain"
              />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
